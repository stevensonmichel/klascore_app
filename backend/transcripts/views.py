from rest_framework import generics
from .models import Transcript
from .serializers import TranscriptSerializer

class TranscriptListView(generics.ListCreateAPIView):
    queryset = Transcript.objects.all()
    serializer_class = TranscriptSerializer