from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from users.models import User
from schools.models import School
from schools.serializers import SchoolSerializer
from users.serializers import UserSerializer

class AdminDashboardView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def get(self, request, *args, **kwargs):
        # Fetch the currently logged-in user
        user = request.user
        
        # Get the user's school and list of available schools
        user_data = UserSerializer(user).data
        school_data = School.objects.all()
        
        # Prepare the response data
        response_data = {
            'user': user_data,
            'available_schools': SchoolSerializer(school_data, many=True).data
        }
        
        return Response(response_data, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):
        # Ensure user is authenticated and can be updated
        user = request.user
        
        # Check if the user is sending a school_id to update their affiliation
        school_id = request.data.get('school_id', None)
        if not school_id:
            return Response({"error": "School ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Fetch the school object, or return error if not found
        school = get_object_or_404(School, id=school_id)

        # Update the user's school
        user.school = school
        user.save()
        
        # Return the updated user data
        updated_user_data = UserSerializer(user).data
        return Response(updated_user_data, status=status.HTTP_200_OK)