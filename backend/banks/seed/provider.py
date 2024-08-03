from faker.providers import BaseProvider
from banks.models import BankDetails


ifsc_codes = list(BankDetails.objects.order_by('?').values_list('ifsc'))[0:20]
ifsc_codes = [ code[0] for code in ifsc_codes]

# ifsc_codes = [ ]



class IfscSeedProvider(BaseProvider):
    __provider__ = 'ifsc_code'

    def ifsc_code(self):
        return self.generator.random_element(elements=ifsc_codes)

 
class BankAccountProvider(BaseProvider):
    __provider__='bank_account_number'
    __provider__='bank_account_type'
    __provider__='bank_details'

    def bank_account_number(self):
        return self.generator.pyint(min_value=111111111111,max_value=999999999999)    
    def bank_account_type(self):
        return self.generator.random_element(elements=['C','S'])
        
    def bank_details(self):
        ifsc_code = self.generator.ifsc_code()
        bank = BankDetails.objects.get(ifsc=ifsc_code)
        return bank

    # __provider__='bank_customer'
