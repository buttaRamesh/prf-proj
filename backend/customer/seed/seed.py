import factory
from faker.providers import DynamicProvider

gender_provider = DynamicProvider(
    provider_name='gender',
    elements = ['M','F','U']
)

factory.Faker.add_provider(gender_provider)

n = factory.Faker('first_name')
print(n)