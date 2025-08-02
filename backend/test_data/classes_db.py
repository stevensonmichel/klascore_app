# create_schools.py
import sys
import os
import django
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))



# Setup Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'klascore_backend.settings')
django.setup()
from schools.models import School
from users.models import User
from classes.models import Class  # Import Class model
from enrollments.models import AcademicYear  # Import AcademicYear model

# Create schools manually
def create_academic_year_and_classes():
    academic_year = AcademicYear.objects.create(
        year="2024-2025",
        start_date="2024-09-01",
        end_date="2025-06-15"
    )

   
    school_id = 1  # Assuming school with ID 1 exists

    # Create sections for each class from "1ère Année" to "NS4" for the specified school
    class_names = [
        ('1A', '1ère Année A'), ('1B', '1ère Année B'), ('1C', '1ère Année C'), ('1D', '1ère Année D'), ('1E', '1ère Année E'),
        ('2A', '2ème Année A'), ('2B', '2ème Année B'), ('2C', '2ème Année C'), ('2D', '2ème Année D'), ('2E', '2ème Année E'),
        ('3A', '3ème Année A'), ('3B', '3ème Année B'), ('3C', '3ème Année C'), ('3D', '3ème Année D'), ('3E', '3ème Année E'),
        ('4A', '4ème Année A'), ('4B', '4ème Année B'), ('4C', '4ème Année C'), ('4D', '4ème Année D'), ('4E', '4ème Année E'),
        ('5A', '5ème Année A'), ('5B', '5ème Année B'), ('5C', '5ème Année C'), ('5D', '5ème Année D'), ('5E', '5ème Année E'),
        ('6A', '6ème Année A'), ('6B', '6ème Année B'), ('6C', '6ème Année C'), ('6D', '6ème Année D'), ('6E', '6ème Année E'),
        ('7A', '7ème Année A'), ('7B', '7ème Année B'), ('7C', '7ème Année C'), ('7D', '7ème Année D'), ('7E', '7ème Année E'),
        ('8A', '8ème Année A'), ('8B', '8ème Année B'), ('8C', '8ème Année C'), ('8D', '8ème Année D'), ('8E', '8ème Année E'),
        ('9A', '9ème Année A'), ('9B', '9ème Année B'), ('9C', '9ème Année C'), ('9D', '9ème Année D'), ('9E', '9ème Année E'),
        # Nouveau Secondaire
        ('NS1A', 'NS1 A'), ('NS1B', 'NS1 B'), ('NS1C', 'NS1 C'), ('NS1D', 'NS1 D'), ('NS1E', 'NS1 E'),
        ('NS2A', 'NS2 A'), ('NS2B', 'NS2 B'), ('NS2C', 'NS2 C'), ('NS2D', 'NS2 D'), ('NS2E', 'NS2 E'),
        ('NS3A', 'NS3 A'), ('NS3B', 'NS3 B'), ('NS3C', 'NS3 C'), ('NS3D', 'NS3 D'), ('NS3E', 'NS3 E'),
        ('NS4A', 'NS4 A'), ('NS4B', 'NS4 B'), ('NS4C', 'NS4 C'), ('NS4D', 'NS4 D'), ('NS4E', 'NS4 E'),
    ]

    # Create classes and link them to the academic year and school
    for class_code, class_name in class_names:
        class_instance = Class.objects.create(
            school_id=school_id,  # Assuming school ID is 1 (can replace with dynamic value)
            name=class_name,
            academic_year=academic_year
        )
        print(f"Created class: {class_name} ({class_code})")


if __name__ == '__main__':
    create_academic_year_and_classes()
