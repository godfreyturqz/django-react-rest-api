from rest_framework import serializers
from .models import Rfi

class RfiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rfi
        fields = '__all__'