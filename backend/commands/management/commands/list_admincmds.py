from django.core.management.base import BaseCommand
from django.core.management import get_commands

class Command(BaseCommand):
    helps = 'lists all admin commands'

    def handle(self,*args,**kwargs):
        commands = get_commands().items()

        for (command,app)   in commands:
            print(f"{command}    ({app})" )

        





