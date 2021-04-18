from rest_framework import viewsets
from .models import Rfi
from .serializers import RfiSerializer

class RfiViewSet(viewsets.ModelViewSet):
    queryset = Rfi.objects.all()
    serializer_class = RfiSerializer