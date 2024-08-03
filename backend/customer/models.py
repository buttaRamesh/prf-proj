from django.db import models

GENDERS = [('M','Male'),('F','Female'),('U','Unknown')]
ACCOUNT_TYPES = [('S','SAVING'),('C','CURRENT')]

class Customer(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    gender = models.CharField(max_length=1,choices=GENDERS )
    dateofbirth = models.DateField()

    email = models.EmailField()
    phone1 = models.PositiveSmallIntegerField()
    phone2 = models.PositiveSmallIntegerField()

    pan = models.CharField(max_length=10)
    adhaar = models.CharField(max_length=12)
    
    