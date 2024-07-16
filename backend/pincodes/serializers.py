from rest_framework import serializers
from .models import Pincodes

class Pincodeserializer(serializers.ModelSerializer):
    class Meta:
        model = Pincodes
        fields = "__all__"