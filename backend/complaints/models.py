# complaints/models.py

from django.db import models
from users.models import User  # Import User model from the users app

class Complaint(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('resolved', 'Resolved'),
    ]

    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='complaints')
    message = models.TextField()
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='pending',
    )
    submitted_at = models.DateTimeField(auto_now_add=True)
    resolved_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Complaint by {self.student.name} ({self.status})"

    class Meta:
        verbose_name = 'Complaint'
        verbose_name_plural = 'Complaints'

    # Filter complaints for students (role-based filter)
    @property
    def is_student_complaint(self):
        return self.student.role == 'student'
