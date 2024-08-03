from rest_framework.serializers import ModelSerializer
from pincodes.models import Pincodes
class PincodeSerializer(ModelSerializer):

    class Meta:
        model = Pincodes
        fields = '__all__'