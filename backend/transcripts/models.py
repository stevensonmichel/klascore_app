# transcripts/models.py

from django.db import models
from users.models import User  # Import User model from the users app

class Transcript(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processed', 'Processed'),
    ]

    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transcripts')
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='pending',
    )
    requested_at = models.DateTimeField(auto_now_add=True)
    processed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Transcript for {self.student.name} ({self.status})"

    class Meta:
        verbose_name = 'Transcript'
        verbose_name_plural = 'Transcripts'

    # Filter for student transcripts based on role
    @property
    def is_student_transcript(self):
        return self.student.role == 'student'
