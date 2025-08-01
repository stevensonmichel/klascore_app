# transcripts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('transcripts/', views.TranscriptListView.as_view(), name='transcript_list'),
]
