from faker import Faker
from faker.providers import DynamicProvider
from banks.models import BankDetails
from faker.factory import Factory
# from faker.factory.django import DjangoModelFactory

def _get_ifsc_codes():
    ifsc_codes = list(BankDetails.objects.order_by('?').values_list('ifsc'))[0:20]
    ifsc_codes = [ code[0] for code in ifsc_codes]
    return ifsc_codes

gender_provider = DynamicProvider(
    provider_name='gender',
    elements = ['M','F','U']
)


account_Type_provider = DynamicProvider(
    provider_name='account_type',
    elements=['S','C']
)

ifsc_provider = DynamicProvider(
    provider_name='ifsc',
    elements=_get_ifsc_codes()
)
fake = Faker('en_IN')
fake.add_provider(gender_provider)
fake.add_provider(account_Type_provider)
fake.add_provider(ifsc_provider)

# class CustomerFactory(factory.django.DjangoModelFactory):

def log():
#     fake = Faker('en_IN')
#     fake.add_provider(gender_provider)
#     fake.add_provider(account_Type_provider)
#     fake.add_provider(ifsc_provider)
#     print(fake.gender())
#     for i in range(20):
# #     print(f"Gender = {fake.gender()} ---  Account = {fake.account_type()}")
#         print(fake.ifsc())


    FFaker = Factory.create
    fake = FFaker('en_IN')
    print(fake.first_name_male())