
from django.urls import path
from . import views

urlpatterns = [
    path('classes/', views.ClassListView.as_view(), name='class_list'),
]