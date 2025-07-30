from django.urls import path
from .views import MesClassesView

urlpatterns = [
    path('mes-classes/', MesClassesView.as_view(), name='mes-classes'),
]