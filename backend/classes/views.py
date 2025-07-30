from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Classe
from .serializers import ClasseSerializer

class MesClassesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        classes = Classe.objects.filter(professor=request.user)
        serializer = ClasseSerializer(classes, many=True)
        return Response(serializer.data)