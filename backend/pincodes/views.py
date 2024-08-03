from rest_framework.generics import ListAPIView
from pincodes.models import Pincodes
from pincodes.serializers import PincodeSerializer
from rest_framework import filters
from rest_framework.fields import IntegerField
from rest_framework.fields import CharField
from rest_framework.exceptions import ValidationError

class PincodeFilterBackend(filters.BaseFilterBackend):
    search_param = 'pin'
    search_field = 'pincode'
    def validate_pincode(self,request):
        if self.search_param not in request.query_params:
            raise ValidationError('missing query param')
        value = request.query_params.get(self.search_param)
        if not value.isnumeric():
            raise ValidationError('pincode value must be numeric')
        if len(request.query_params.get(self.search_param)) !=6:
            raise ValidationError('pincode value must be of 6 digits')    
    def get_search_fields(self, view, request):
        return getattr(view, 'search_fields', None)
    def get_search_terms(self, request):
        value = request.query_params.get(self.search_param, '')
        return value
    def filter_queryset(self, request, queryset, view):
        self.validate_pincode(request)
        # search_fields = self.get_search_fields(view, request)
        search_terms = self.get_search_terms(request)
        return queryset.filter(pincode=search_terms)

class PincodeLookupView(ListAPIView):
    # search_fields = ['pincode']
    filter_backends = (PincodeFilterBackend,)
    queryset = Pincodes.objects.all()
    serializer_class = PincodeSerializer