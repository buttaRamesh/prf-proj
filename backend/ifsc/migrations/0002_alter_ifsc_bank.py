# Generated by Django 5.0.7 on 2024-07-17 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ifsc', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ifsc',
            name='bank',
            field=models.CharField(max_length=60),
        ),
    ]
