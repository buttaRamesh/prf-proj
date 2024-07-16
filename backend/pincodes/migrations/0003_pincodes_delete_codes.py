# Generated by Django 5.0.7 on 2024-07-13 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pincodes', '0002_rename_pincodes_codes'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pincodes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pincode', models.PositiveSmallIntegerField()),
                ('city', models.CharField(max_length=60)),
                ('district', models.CharField(max_length=60)),
                ('state', models.CharField(max_length=60)),
            ],
        ),
        migrations.DeleteModel(
            name='Codes',
        ),
    ]