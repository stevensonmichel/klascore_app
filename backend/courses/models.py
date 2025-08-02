# course/models.py
from django.db import models

class Course(models.Model):
    COURSE_CHOICES = [
        ('Mathematics', 'Mathematiques'),
        ('Physics', 'Physique'),
        ('Chemistry', 'Chimie'),
        ('Biology', 'Biologie'),
        ('History', 'Histoire'),
        ('Geography', 'Géographie'),
        # Add more predefined courses as needed
    ]
    name = models.CharField(max_length=255) 
    description = models.TextField()  


    def __str__(self):
        return self.name