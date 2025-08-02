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

# Create schools manually
def create_schools():
    

    admin_1 = User.objects.create(
        username="admin1",  # Username for Admin 1
        email="admin1@example.com",  # Email for Admin 1
        first_name="Admin",  # First name for Admin 1
        last_name="One",  # Last name for Admin 1
        role='admin',  # Admin role
        password="password123"  # Simple password for Admin 1
    )
    
    # Admin 2 linked to school 2
    admin_2 = User.objects.create(
        username="admin2",  # Username for Admin 2
        email="admin2@example.com",  # Email for Admin 2
        first_name="Admin",  # First name for Admin 2
        last_name="Two",  # Last name for Admin 2
        role='admin',  # Admin role
        password="password123"  # Simple password for Admin 2
    )

    school_1 = School.objects.create(
        name="College Dominique Savio",
        type="Secondary",
        address="123 Rue de l'Ecole, Port-au-Prince, Haiti",
        admin=admin_1  # Link Admin 1 to School 1
    )

    school_2 = School.objects.create(
        name="Institut Sainte Anne",
        type="Primary",
        address="456 Boulevard de Jacmel, Jacmel, Haiti",
        admin=admin_2
    )
    print("Schools created successfully:")
    print(f"School 1: {school_1.name}")
    print(f"School 2: {school_2.name}")
    print(f"School 1: {admin_1.username}")
    print(f"School 2: {admin_2.username}")

if __name__ == '__main__':
    create_schools()
