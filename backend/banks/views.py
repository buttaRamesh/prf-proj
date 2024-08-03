from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.generics import ListAPIView

from django.shortcuts import get_object_or_404
from rest_framework.exceptions import ValidationError
from django_filters.rest_framework.backends import DjangoFilterBackend
from .serializers import IfscLookupSerializer
from .serializers import BankAccountSerializer
from .models import BankDetails
from .models import BankAccount
from customer.models import Customer
from customer.views import CustomerRelatedView

class IfscLookupView(RetrieveAPIView):
    queryset = BankDetails.objects.all()
    serializer_class = IfscLookupSerializer
    # filter_backends = (DjangoFilterBackend,)
    # filterset_fields = ('ifsc',)

    def get_object(self):
        lookup_value = self.kwargs[ self.lookup_field]
        if len(lookup_value) != 11:
            raise ValidationError('IFSC code should be of 11 chars')
        return super().get_object()
    

class BankAcountRUDView(RetrieveUpdateDestroyAPIView):
    queryset = BankAccount.objects.all()
    serializer_class = BankAccountSerializer

# class CustomerBankAccountListView(ListAPIView):
#     serializer_class = BankAccountSerializer

#     def is_validCustomer(self,cust_id):
#         if cust_id is not None and cust_id.isnumeric():
#             return True
#         return False
#     def get_queryset(self):
#         print('kwargs ' ,self.kwargs)
#         id = self.kwargs.get('id',None) 
#         if self.is_validCustomer(id):
#             cust = get_object_or_404(Customer,id=id)
#             if cust:
#                 return cust.bank_accounts.all()
#         return Customer.objects.none()
class CustomerBankAccountListView(CustomerRelatedView):
    serializer_class = BankAccountSerializer
    related_name = 'bank_accounts'

     