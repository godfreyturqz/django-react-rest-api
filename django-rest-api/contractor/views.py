from rest_framework import viewsets
from .models import Contractor
from .serializers import ContractorSerializer

# Create your views here.
class ContractorViewSet(viewsets.ModelViewSet):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer