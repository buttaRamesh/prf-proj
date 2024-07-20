from django.db import models

class Ifsc(models.Model):
    ifsc = models.CharField(max_length=11)
    bank = models.CharField(max_length=60)
    branch = models.CharField(max_length=80)
    centre  = models.CharField(max_length=40)
    city = models.CharField(max_length=40)
    district = models.CharField(max_length=40)
    state  = models.CharField(max_length=60)
    contact = models.CharField(max_length=12)
    address = models.CharField(max_length=100)
    micr = models.CharField(max_length=12)

    def __str__(self) -> str:
        return  f"{self.ifsc} - {self.city}"
    

