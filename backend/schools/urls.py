
from django.urls import path
from . import views

urlpatterns = [
    path('schools/', views.SchoolListView.as_view(), name='school_list'),
]
