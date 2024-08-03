from collections import OrderedDict
from faker.providers import BaseProvider
from banks.models import BankDetails
import random

GENDERS = OrderedDict([
    ('M',0.7),
    ('F',0.28),
    ('U',0.02),
])
# GENDERS = ['M','F','U']

class CustomerSeedProvider(BaseProvider):
    __provider__ = 'customer_gender'
    __provider__ = 'customer_first_name'
    __provider__ = 'customer_last_name'
    __provider__ = 'customer_dateofbirth'
    __provider__ = 'customer_email'
    __provider__ = 'customer_phone'
    __provider__ = 'customer_pan'
    __provider__ = 'customer_adhaar'
    # __provider__ = 'customer_bank'
    # __provider__ = 'customer_account_type'
    # __provider__ = 'customer_account_number'


    def customer_gender(self):
        # return random.choice(GENDERS)
        return self.generator.random_element(elements=GENDERS)
    def customer_first_name(self,is_male=True):
        if is_male: return self.generator.first_name_male() 
        return self.generator.first_name_female()    
    def customer_last_name(self,is_male=True):
        if is_male: return self.generator.last_name_male() 
        return self.generator.last_name_female()    
    def customer_dateofbirth(self):
        return self.generator.date_of_birth(minimum_age=18,maximum_age=100)    
    def customer_email(self,c):    
        return c.first_name[0].lower()+c.last_name.lower()+'@example.com'   
        # return self.generator.email()    
    def customer_phone(self):
        return self.generator.phone_number()    
    def customer_pan(self):
        chars_5 = self.generator.pystr(min_chars=5,max_chars=5)
        digits_4 = self.generator.pyint(min_value=1111,max_value=9999)
        chars_1 = self.generator.pystr(min_chars=1,max_chars=1)
        return (chars_5 + str(digits_4) + chars_1).upper()    
    def customer_adhaar(self):
        return self.generator.aadhaar_id()    
    # def customer_account_type(self):
    #     return self.generator.random_element(elements=['C','S'])
    # def customer_account_number(self):
    #     return self.generator.pyint(min_value=111111111111,max_value=999999999999),    
    # def customer_bank(self):
    #     ifsc_code = self.generator.ifsc_code()
    #     bank = BankDetails.objects.get(ifsc=ifsc_code)
    #     return bank
    
# from faker import Faker
# fake = Faker()
# fake.add_provider(CustomerSeedProvider)
 