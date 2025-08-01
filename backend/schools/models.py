from django.db import models
from users.models import User

class School(models.Model):
    SCHOOL_TYPES = [
        ('Primary', 'Primary'),
        ('Secondary', 'Secondary'),
        ('College', 'College'),
        ('Master', 'Master'),
    ]
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=SCHOOL_TYPES)
    address = models.TextField()

    admin = models.OneToOneField(User, on_delete=models.CASCADE, related_name='school', null=True, blank=True)

    class Meta:
        db_table = 'school'  # Custom table name
    
    def __str__(self):
        return self.name