import pprint
import json
from random import randint
import factory

from customer.seed.factory import CustomerFactory
from address.seed.factory import AddressFactory
from banks.seed.factory import BankAccountFactory

from customer.serializers import CustomerSerializer
from address.serializers import AddressSerializer
from banks.serializers import BankAccountSerializer

from customer.models import Customer

def test_customer():
   # dt = {'id': 39, 'first_name': 'Heer', 'last_name': 'Chaudhari', 'gender': 'M', 'dateofbirth': '1944-03-12', 'email': 'hchaudhari@example.com', 'phone1': 4920845475, 'phone2': 3935707640, 'pan': 'NDCTA5759P', 'adhaar': '907878278734', 'address': [{'id': 54, 'line1': '181 , Bali Marg', 'line2': '85, Kale Road', 'city': 'Icrisat', 'district': 'SANGAREDDY', 'state': 'TELANGANA', 'country': 'India', 'pincode': 502324, 'created_on': '2024-07-31T11:44:29.728011Z', 'last_modified': '2024-07-31T11:44:29.728011Z', 'customer': 39}, {'id': 55, 'line1': '55/339 , Goel Road', 'line2': '32/37\nGanguly Nagar', 'city': 'KUKNOOR', 'district': 'NIZAMABAD', 'state': 'TELANGANA', 'country': 'India', 'pincode': 503311, 'created_on': '2024-07-31T11:44:29.786995Z', 'last_modified': '2024-07-31T11:44:29.786995Z', 'customer': 39}], 'bank_accounts': [{'account_number': '858085269989', 'account_type': 'C', 'bank_details': {'ifsc': 'MAHB0000626', 'name': 'Bank of Maharashtra', 'branch': 'PONKAL', 'centre': 'PONKAL', 'city': 'NIRMAL', 'district': 'PONKAL', 'state': 'TELANGANA', 'contact': '+918087990626', 'address': 'MANDALAMAU -MAMADA HOUSE NO 2-78PONKAL', 'micr': '504014005'}}]}
   # pprint.pp(dt,depth=4,indent=2)
   # return 

   print('Test Serialization for customer ...... ')
   customer = factory.build(dict,FACTORY_CLASS=CustomerFactory)  
   address =  [
      factory.build(dict,FACTORY_CLASS=AddressFactory) 
      for _ in range(randint(1, 2))
      ]  
    
   bank_accounts = []
   for _ in range(randint(1,2)):
      account_data = factory.build(dict,FACTORY_CLASS=BankAccountFactory)
      bd = account_data.pop('bank_details')
      account_data['bank_code']=bd.pk
      bank_accounts.append(account_data)

   data = {
      **customer,
      'address':address,
      'bank_accounts':bank_accounts
      }
   pprint.pp(data,indent=2,depth=4)
   # pprint.pp(data['address'],indent=5,depth=2)
   # pprint.pp(data['bank_accounts'],indent=5,depth=2)
   cust_ser = CustomerSerializer(data=data)
   if cust_ser.is_valid():
      cust = cust_ser.save()
      print(f'{cust.id}  {cust.first_name} {cust.email} addrs={cust.address.count()}  accts{cust.bank_accounts.count()}')
      print('')
      print('')
      print('test for deserialization ...')
      cs = CustomerSerializer(cust)
      pprint.pp(cs.data,depth=6,indent=2)
   else :
      print(cust_ser._errors)

def test_account():

   bank_accounts = factory.build(dict,FACTORY_CLASS=BankAccountFactory)
   code=bank_accounts['bank_details']
   data = {**bank_accounts,'bank_code':code.pk}
   ser = BankAccountSerializer(data=data)
   if ser.is_valid():
     acct = ser.save()
     print(f"Account created {acct.id}  {acct.account_number} {acct.bank_details.name}" )
   else:
      print(ser.errors)

def test_cust_list_ser():
   custs = Customer.objects.all()[5:10]
   ser = CustomerSerializer(custs,many=True)
   pprint.pp(ser.data,depth=4,indent=2)

def run():
   # test_customer()
   test_cust_list_ser()
   # test_account()