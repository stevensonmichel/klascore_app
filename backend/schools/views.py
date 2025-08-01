from rest_framework import generics
from .models import School
from .serializers import SchoolSerializer

class SchoolListView(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer