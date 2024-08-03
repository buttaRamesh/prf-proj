from typing import Any
from django.core.management.base import BaseCommand, CommandParser
from address.seed.provider import AddressSeedProvider
from address.seed.factory import AddressSeedFactory

class Command(BaseCommand):
    help='populate addresses'
    USAGE_MSG = f" USAGE:  load_address --size=value [--save] [--show]"
    SIZE_ERROR_MSG = f'\n ERROR:  size is missing'
    PARAM1_MSG = '      size -  number of records to be created'
    PARAM2_MSG = '      save -  (optional) if specified saves to database'
    PARAM3_MSG = '      show -  (optional) if specified shows first 5 records\n'
    
    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('--size',type=int,help='number of records')
        parser.add_argument('--save', action='store_true', help='saved to database')
        parser.add_argument('--show', action='store_true', help='to display first 5 records')
        parser.add_argument('--clean', action='store_true', help='to delete existing records')
         
    
    def handle(self, *args: Any, **options: Any) -> str | None:
        # size = options['size'] if options[size] else 5
        size  = options['size' ]
        save  = options['save' ]
        show  = options['show'] 
        clean = options['clean']
        if clean:
            self.clean()
        if clean and not size:
            return
        if not size:
            self.stdout.write(self.style.ERROR(self.SIZE_ERROR_MSG))
            self.stdout.write(self.style.HTTP_SERVER_ERROR(self.USAGE_MSG))
            self.stdout.write(self.style.HTTP_NOT_MODIFIED(self.PARAM1_MSG))
            self.stdout.write(self.style.HTTP_NOT_MODIFIED(self.PARAM2_MSG))
            self.stdout.write(self.style.HTTP_NOT_MODIFIED(self.PARAM3_MSG))
            return 
        else :
            self.size=size
            self.show=show
         
        if save:
            self._create()
        else:
            self._build()
        

    def _build(self):
         addr_list = AddressSeedFactory.build_batch(self.size)
         self.stdout.write(self.style.SUCCESS(f'\nBuild {len(addr_list)} records'))
         
         if self.show:
            self._show_records(addr_list)
    
    def _create(self):
        addr_list = AddressSeedFactory.create_batch(self.size)
        self.stdout.write(self.style.SUCCESS(f'\nSaved {len(addr_list)} records'))

        if self.show:
            self._show_records(addr_list)

    def clean(self):
        AddressSeedFactory.delete_records()
    
    def _show_records(self,addr_list):
        sz = min(5,len(addr_list))
        for idx in range(sz):
            addr = addr_list[idx]
            self.stdout.write(self.style.HTTP_NOT_MODIFIED(f"   {addr.id} - {addr.pincode} {addr.city} {addr.district} {addr.state} "))
        print('')
