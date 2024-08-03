from django.db import models
from customer.models import Customer
class Address(models.Model):
    line1 = models.CharField(max_length=80)
    line2 = models.CharField(max_length=80)
    city = models.CharField(max_length=20)
    district = models.CharField(max_length=20)
    state=models.CharField(max_length=20)
    country=models.CharField(max_length=20,default='India')
    pincode = models.PositiveSmallIntegerField()
    customer = models.ForeignKey(
            Customer,
            blank=True,
            null=True,
            on_delete=models.CASCADE,
            related_name='address'
        )

    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

