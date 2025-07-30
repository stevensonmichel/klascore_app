# from rest_framework import generics
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework import status
# from django.contrib.auth import authenticate
# from rest_framework.permissions import AllowAny


# from .models import User
# from .serializers import RegisterSerializer, LoginSerializer

# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer
#     permission_classes = [AllowAny]

#     def post(self, request, *args, **kwargs):
#         return super().post(request, *args, **kwargs) 
    
# class LoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         serializer = LoginSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         email = serializer.validated_data['email']
#         password = serializer.validated_data['password']

#         user = authenticate(email=email, password=password)
        
#         if user is not None:
            
#             refresh = RefreshToken.for_user(user)
#             print(1000*"#")
#             print("Incoming request data:", user)
#             print("Refresh Token:", str(refresh))
#             print("Access Token:", str(refresh.access_token))
#             return Response({
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#             })
#         else:
#             return Response({"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)