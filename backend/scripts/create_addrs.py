from address.seed.factory import AddressSeedFactory
from address.models import Address
from banks.seed.factory import BankAccountFactory
def test_1():
    cust4 = Address.objects.last().customer
    addr = AddressSeedFactory.build()
    addr.customer = cust4
    addr.save()
    print(addr.city,addr.pincode,addr.customer)

def test_2():
    cust4 = Address.objects.last().customer
    print(cust4)
    acct = cust4.bank_accounts.all()[0] 
    print(acct)
    accnew = BankAccountFactory.build()
    accnew.customer = cust4
    accnew.save()

def test3():
    cust4 = Address.objects.last().customer
    print(cust4.bank_accounts.all())

def run():
    test_2()
    test3()