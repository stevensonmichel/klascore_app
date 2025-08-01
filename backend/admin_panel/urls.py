from django.urls import path
from .views import AdminDashboardView

urlpatterns = [
    path('dashboard/', AdminDashboardView.as_view()),
    #  path('users/', views.UserListView.as_view(), name='user_list'),
    # path('classes/', views.ClassListView.as_view(), name='class_list'),
    # path('complaints/', views.ComplaintListView.as_view(), name='complaint_list'),
    # path('grades/', views.GradeListView.as_view(), name='grade_list'),
    # path('professors/', views.ProfessorListView.as_view(), name='professor_list'),
    # path('students/', views.StudentListView.as_view(), name='student_list'),
    # path('transcripts/', views.TranscriptListView.as_view(), name='transcript_list'),
]