from django.db import models
from customer.models import Customer
# Create your models here.

GENDERS = [('M','Male'),('F','Female')]
ACCOUNT_TYPES = [('S','SAVING'),('C','CURRENT')]

class BankDetails(models.Model):
    ifsc = models.CharField(max_length=11,primary_key=True)
    name = models.CharField(max_length=60)
    branch = models.CharField(max_length=80)
    centre  = models.CharField(max_length=40)
    city = models.CharField(max_length=40)
    district = models.CharField(max_length=40)
    state  = models.CharField(max_length=60)
    contact = models.CharField(max_length=10)
    address = models.CharField(max_length=100)
    micr = models.CharField(max_length=9)

    def __str__(self) -> str:
        return  f"{self.ifsc}"
    

class BankAccount(models.Model):
    account_number = models.CharField(max_length=15)
    account_type = models.CharField(max_length=1,choices=ACCOUNT_TYPES)
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        null=True,
        related_name='bank_accounts'
    )
    bank_details = models.ForeignKey(
        BankDetails,
        db_constraint=False,
        on_delete=models.DO_NOTHING,
        related_name='bank_details'
    )
