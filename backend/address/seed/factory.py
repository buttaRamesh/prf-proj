import factory
from faker import Faker
from address.models import Address
from address.seed.provider import AddressSeedProvider

fake = Faker('en_IN')
fake.add_provider(AddressSeedProvider)

class AddressFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Address
    
    line1 = factory.LazyAttribute(lambda o: fake.address_line1())
    line2 = factory.LazyAttribute(lambda o: fake.address_line2())
    pincode =factory.LazyAttribute(lambda o: fake.address_pincode())
    city =  factory.LazyAttribute(lambda o: fake.address_city())
    district = factory.LazyAttribute(lambda o: fake.address_district())
    state=factory.LazyAttribute(lambda o: fake.address_state())
    country=factory.LazyAttribute(lambda o: fake.address_country())

    @classmethod
    def delete_records(self):
        log = Address.objects.all().delete()
        print(f'deleted {log[0]} records')
         
 