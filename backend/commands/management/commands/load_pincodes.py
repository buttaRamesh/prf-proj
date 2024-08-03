from django.core.management.base import BaseCommand, CommandParser
import json
from pincodes.models import Pincodes

class Command(BaseCommand):
    help='Loads PinCode Table from csv file'

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument(
            'file_name',
            type=str,
            help='name of json file'
        )

    def _getObject(self,data):
        return {
            'pincode':data['Pincode'],
            'city':data['City'],
            'district':data['District'],
            'state':data['StateName']
        }
     
    def handle(self,*args,**kwargs):
        file_name = kwargs['file_name']
        with open(file_name, mode="r", encoding="utf-8") as read_file:
            records = json.load(  read_file)
            pins = [Pincodes(**self._getObject(pin)) for pin in records]
            clean_info = Pincodes.objects.all().delete()
            print('Delete Info ...')
            print(clean_info);
            insert_info = Pincodes.objects.bulk_create(pins)
            print('insert info....')
            print(Pincodes.objects.count())
