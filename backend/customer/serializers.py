from rest_framework.serializers import ModelSerializer
from .models import Customer
from address.models import Address
from banks.models import BankAccount
from address.serializers import AddressSerializer
from banks.serializers import BankAccountSerializer
field_names = [field.name for field in Customer._meta.fields]
    
class CustomerSerializer(ModelSerializer):
    address = AddressSerializer(many=True)
    bank_accounts = BankAccountSerializer(many=True )
    class Meta:
        fields = [*field_names , 'address' ,'bank_accounts']
        model = Customer             
    
    def create(self, validated_data):
        bank_accounts =  validated_data.pop('bank_accounts') if 'bank_accounts' in validated_data else []
        address = validated_data.pop('address') if 'address' in validated_data else []
 
        cust = Customer.objects.create(**validated_data)
        for addr in address:
            ao = Address.objects.create(**addr,customer=cust)
            
        for acct in bank_accounts:
            # BankAccount.objects.create(**acct,customer=cust)
            bserv = BankAccountSerializer(data=acct)
            bserv.is_valid(raise_exception=True)
            bserv.save(customer=cust)
            # bserv.save()
        return cust

         
 