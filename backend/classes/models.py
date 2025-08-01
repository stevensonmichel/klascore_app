from django.db import models
from schools.models import School  # Import School model if necessary

class Class(models.Model):
    name = models.CharField(max_length=255)
    school = models.ForeignKey(School, on_delete=models.CASCADE)

    def __str__(self):
        return self.name