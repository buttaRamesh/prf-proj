"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from address.views import AddressRUDView , CustomerAddressListView
from pincodes.views import PincodeLookupView
from banks.views import IfscLookupView , CustomerBankAccountListView , BankAcountRUDView
from customer.views import CustomerListView , CustomerRUDView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pincode', PincodeLookupView.as_view()),
    path('ifsc/<pk>', IfscLookupView.as_view()),
    path('address/<pk>', AddressRUDView.as_view()),
    path('account/<pk>', BankAcountRUDView.as_view()),
    path('customer', CustomerListView.as_view()),
    path('customer/<pk>', CustomerRUDView.as_view()),
    path('customer/<id>/account', CustomerBankAccountListView.as_view()),
    path('customer/<id>/address', CustomerAddressListView.as_view()),
]
