from rest_framework import serializers
from .models import BankDetails
from .models import BankAccount

class IfscLookupSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetails
        fields = '__all__'

class BankDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetails
        fields = '__all__'
        
class BankAccountSerializer(serializers.ModelSerializer):
    bank_details = BankDetailsSerializer(read_only=True)
    bank_code = serializers.CharField(write_only=True)
    class Meta:
        model = BankAccount
        fields = ['id','account_number','account_type','bank_details','bank_code','customer']

    def create(self, validated_data):         
        customer = None
        bank_details = None
        if 'customer' in validated_data:
            customer = validated_data.pop('customer')
        if 'bank_code' in validated_data:
            bank_code = validated_data.pop('bank_code')
            bank_details =  BankDetails.objects.get(pk=bank_code) 
        account = BankAccount.objects.create(
            **validated_data,
            bank_details=bank_details,
            customer=customer
        )
        return account 
    
    



