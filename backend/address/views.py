from django.shortcuts import get_object_or_404
from rest_framework.mixins import RetrieveModelMixin , UpdateModelMixin 
from rest_framework.viewsets import GenericViewSet
from rest_framework.generics import RetrieveAPIView , UpdateAPIView,ListAPIView
from rest_framework import filters
from rest_framework.exceptions import NotFound
from address.models import Address
from customer.models import Customer
from customer.views import CustomerRelatedView
from address.serializers import AddressSerializer

class AddressRUDView(RetrieveAPIView,UpdateAPIView):
     queryset = Address.objects.all()
     serializer_class = AddressSerializer


class CustomerAddressListView(CustomerRelatedView):
    serializer_class = AddressSerializer
    related_name = 'address'