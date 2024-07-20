from rest_framework import serializers
from .models import Ifsc

class IFSCSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ifsc
        fields = "__all__"