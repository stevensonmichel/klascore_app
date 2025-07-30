from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]
    print(1000*"!!!!!!!!!!!!")

    def get(self, request):
        print(1000*"@")
        print("The backend token is", request.auth)  # <-- This prints the token sent in the header

        data = {
            "total_classes": 4,
            "classes": ["Sciences Expérimentales", "Mathématiques", "Physique", "Chimie"],
            "absent_students": ["Marie Joseph", "Pierre Antoine", "Patrick Jean"],
            "average_grade": 14.5,
            "work_progress": 9.8
        }
        return Response(data)
