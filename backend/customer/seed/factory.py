import random
import factory
from faker import Faker
from customer.seed.provider import CustomerSeedProvider
from banks.seed.provider import IfscSeedProvider
from address.seed.factory import AddressFactory
from banks.seed.factory import BankAccountFactory
from customer.models import Customer

fake = Faker('en_IN')
fake.add_provider(IfscSeedProvider)
fake.add_provider(CustomerSeedProvider)

class CustomerFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Customer

    gender = fake.customer_gender()
    first_name = factory.LazyAttribute(lambda o: fake.customer_first_name(is_male=o.gender=='M'))
    last_name = factory.LazyAttribute(lambda o: fake.customer_last_name(is_male=o.gender=='M'))
    dateofbirth = factory.LazyAttribute(lambda o: fake.customer_dateofbirth())
    email = factory.LazyAttribute(lambda o: fake.customer_email(o))

    phone1 = factory.LazyAttribute(lambda o: fake.customer_phone())
    phone2 = factory.LazyAttribute(lambda o: fake.customer_phone())
    pan = factory.LazyAttribute(lambda o: fake.customer_pan())
    adhaar = factory.LazyAttribute(lambda o: fake.customer_adhaar())

    @classmethod
    def delete_records(self):
        log = Customer.objects.all().delete()
        print(f'deleted {log[0]} records')  



class CustomerWithNestedFactory(CustomerFactory):         
    addr = factory.RelatedFactory(
        AddressFactory,
        factory_related_name='customer',         
    )
    acct = factory.RelatedFactory(
        BankAccountFactory,
        factory_related_name='customer',         
    )
    
    
class CustomerWithAddressFactory(CustomerFactory):
    @factory.post_generation
    def address_build(obj, build, extracted, **kwargs):
        print('build called',build)
        print(obj)
        if not build:
            return       
       
        size= random.randint(1, 2)
        print('number_of_units',size)
        for n in range(size):
            AddressFactory(customer=obj)    
    