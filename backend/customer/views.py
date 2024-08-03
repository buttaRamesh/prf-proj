from rest_framework.generics import ListAPIView , RetrieveUpdateDestroyAPIView
from django.shortcuts import get_object_or_404
from .models import Customer
from .serializers import CustomerSerializer


class CustomerListView(ListAPIView):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class CustomerRUDView(RetrieveUpdateDestroyAPIView):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class CustomerRelatedView(ListAPIView):
    def is_validCustomer(self,cust_id):
        if cust_id is not None and cust_id.isnumeric():
            return True
        return False
    def get_queryset(self):
        print('kwargs ' ,self.kwargs)
        id = self.kwargs.get('id',None) 
        print('id',id)
        if self.is_validCustomer(id):
            cust = get_object_or_404(Customer,id=id)
            print('cust',cust)
            if self.related_name == 'address':
                return cust.address.all()
            elif self.related_name == 'bank_accounts':
                return cust.bank_accounts.all()
        return Customer.objects.none()     