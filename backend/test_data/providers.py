from faker import Faker
from faker.providers import DynamicProvider
from banks.models import BankDetails

gender_provider = DynamicProvider(
    provider_name='gender',
    elements = ['M','F','U']
)


account_Type_provider = DynamicProvider(
    provider_name='account_type',
    elements=['S','C']
)

print(BankDetails.objects.count())

fake = Faker('en_IN')
fake.add_provider(gender_provider)
fake.add_provider(account_Type_provider)
print(fake.gender())
for i in range(20):
    print(f"Gender = {fake.gender()} ---  Account = {fake.account_type()}")