from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Classe(models.Model):
    name = models.CharField(max_length=100)
    professor = models.ForeignKey(User, on_delete=models.CASCADE)
    student_count = models.IntegerField(default=0)

    def __str__(self):
        return self.name
