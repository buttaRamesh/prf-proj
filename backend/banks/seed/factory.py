import factory
from banks.seed.provider import BankAccountProvider,IfscSeedProvider
from faker import Faker
from banks.models import BankAccount
from banks.models import BankDetails

fake = Faker('en_IN')
fake.add_provider(BankAccountProvider)
fake.add_provider(IfscSeedProvider)


class BankAccountFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = BankAccount

    account_number = fake.bank_account_number()
    account_type  = fake.bank_account_type()

    bank_details = fake.bank_details()    