import factory
from customer.seed.factory import CustomerWithAddressFactory
from customer.seed.factory import CustomerWithNestedFactory


def run():
#    cust = CustomerWithAddressFactory.build()
#    print(cust)
    dc = factory.build(dict,FACTORY_CLASS=CustomerWithAddressFactory)
    print(dc)
   