from django.core.management.base import BaseCommand
from django.apps import apps

class Command(BaseCommand):
    help = 'Lists all registered apps of project'

    def handle(self,*args,**kwargs):
        print(f"Registered apps : {len(apps.get_app_configs())}")
        for app in apps.get_app_configs():
            print(f"  {app.verbose_name}")