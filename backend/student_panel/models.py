from django.db import models
from schools.models import School
from classes.models import Class  # Import School and Class models
from users.models import User  # Assuming you have a User model


class StudentClass(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    class_instance = models.ForeignKey(Class, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('student', 'class_instance')