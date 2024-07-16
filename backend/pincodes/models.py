from django.db import models

# Create your models here.
class Pincodes(models.Model):
    pincode = models.PositiveSmallIntegerField()
    city = models.CharField(max_length=60)
    district = models.CharField(max_length=60)
    state = models.CharField(max_length=60)


    def __str__(self) -> str:
        return f"[{self.pincode} {self.city}]"