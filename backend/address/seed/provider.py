from faker.providers import BaseProvider
from pincodes.models import Pincodes

# ifsc_codes = list(BankDetails.objects.order_by('?').values_list('ifsc'))[0:20]
# 

class AddressSeedProvider(BaseProvider):
    __provider__ = 'address_line1'
    __provider__ = 'address_line2'
    __provider__ = 'address_pincode'
    __provider__ = 'address_city'
    __provider__ = 'address_district'
    __provider__ = 'address_state'
    __provider__ = 'address_country'

    def _fetch_pincode(self):
        coll = Pincodes.objects.order_by('?')
        idx = self.generator.random_int(min=0, max=coll.count())
        self.pin_info = coll[idx]
        
    def address_line1(self):
        line1 = f"{self.generator.building_number()} , {self.generator.street_name()}" 
        return line1
    def address_line2(self):
        return self.generator.street_address() 
    def address_pincode(self):
        self._fetch_pincode()
        return self.pin_info.pincode
    def address_city(self):
        return self.pin_info.city
    def address_district(self):
        return self.pin_info.district
    def address_state(self):
        return self.pin_info.state
    def address_country(self):
        return 'India'