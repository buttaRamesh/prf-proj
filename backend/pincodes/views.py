from rest_framework.generics import ListAPIView
from .serializers import Pincodeserializer
from .models import Pincodes
class PincodesList(ListAPIView):
    serializer_class = Pincodeserializer

    def get_queryset(self):
        code = self.request.query_params.get('code')
        if code is not None:
            return Pincodes.objects.filter(pincode=code)
        return []
 
