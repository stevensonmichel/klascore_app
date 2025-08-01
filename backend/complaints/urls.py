from django.urls import path
from . import views

urlpatterns = [
    path('complaints/', views.ComplaintListView.as_view(), name='complaint_list'),
]
