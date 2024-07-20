from rest_framework.generics import RetrieveAPIView
from .serializers import IFSCSerializer
from .models import Ifsc
class IfscRetrieve(RetrieveAPIView):
    serializer_class = IFSCSerializer
    queryset = Ifsc.objects.all()
    lookup_field='ifsc'
    # lookup_url_kwarg = 'code'


    
