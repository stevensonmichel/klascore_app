# course/models.py
from django.db import models
from classes.models import Class  # Assuming the Class model is in the admin_panel app

class Course(models.Model):
    name = models.CharField(max_length=255)  # Name of the course (e.g., "Mathematics - 9EME AF")
    description = models.TextField()  # Detailed description of the course
    class_instance = models.ForeignKey(Class, on_delete=models.CASCADE)  # Links this course to a specific class (Many-to-One)

    def __str__(self):
        return self.name