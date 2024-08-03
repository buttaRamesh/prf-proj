# Generated by Django 5.0.7 on 2024-07-30 09:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('banks', '0008_alter_bankaccount_customer'),
        ('customer', '0006_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankaccount',
            name='bank_details',
            field=models.ForeignKey(db_constraint=False, on_delete=django.db.models.deletion.DO_NOTHING, related_name='bank_details', to='banks.bankdetails'),
        ),
        migrations.AlterField(
            model_name='bankaccount',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bank_accounts', to='customer.customer'),
        ),
    ]