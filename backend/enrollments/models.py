from django.db import models

from users.models import User

from courses.models import Course

class AcademicYear(models.Model):
    year = models.CharField(max_length=9)  # Example: "2023-2024"
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.year



class Enrollment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    # grade = models.IntegerField(null=True, blank=True)  # Track the grade for each student
    def get_class_course_professor_model(self):
        from enrollments.models import ClassCourseProfessor  # Importing inside the method
        return ClassCourseProfessor.objects.all()

    class_course_professor = models.ForeignKey('enrollments.ClassCourseProfessor', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('student', 'class_course_professor')

    def __str__(self):
        return f"{self.student} enrolled in {self.class_course_professor}"
    


class ClassCourseProfessor(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    professor = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'professor'})
    academic_year = models.ForeignKey(AcademicYear, on_delete=models.CASCADE) 
    def get_class_model(self):
        from classes.models import Class  # Importing inside the method
        return Class.objects.all()

    class_instance = models.ForeignKey('classes.Class', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('class_instance', 'course', 'professor', 'academic_year')

    def __str__(self):
        return f"{self.professor} teaches {self.course.name} in {self.class_instance.name} ({self.academic_year})"