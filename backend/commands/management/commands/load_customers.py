from django.core.management.base import BaseCommand,CommandParser
from banks.seed.provider import IfscSeedProvider
from customer.seed.provider import CustomerSeedProvider
from customer.seed.factory import CustomerWithNestedFactory

class Command(BaseCommand):
    help='populate addresses'
    USAGE_MSG = f" USAGE:  load_customers --size=value [--save] [--show]"
    SIZE_ERROR_MSG = f'\n ERROR:  size is missing'
    PARAM1_MSG = '      size -  number of records to be created'
    PARAM2_MSG = '      save -  (optional) if specified saves to database'
    PARAM3_MSG = '      show -  (optional) if specified shows first 5 records\n'
    
    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('--size',type=int,help='number of records')
        parser.add_argument('--save', action='store_true', help='saved to database')
        parser.add_argument('--show', action='store_true', help='to display first 5 records')
        parser.add_argument('--clean', action='store_true', help='to delete existing records')
        
    
    def handle(self, *args, **options):
        size = options['size']
        save = options['save']
        show = options['show']
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
         cust_list = CustomerWithNestedFactory.build_batch(self.size)
         self.stdout.write(self.style.SUCCESS(f'\nBuild {len(cust_list)} records'))
         
         if self.show:
            self._show_records(cust_list)
    
    def _create(self):
        cust_list = CustomerWithNestedFactory.create_batch(self.size)
        self.stdout.write(self.style.SUCCESS(f'\nSaved {len(cust_list)} records'))

        if self.show:
            self._show_records(cust_list)
    def clean(self):
        CustomerWithNestedFactory.delete_records()

    def _show_records(self,cust_list):
        sz = min(5,len(cust_list))
        for idx in range(sz):
            cust = cust_list[idx]
            self.stdout.write(self.style.HTTP_NOT_MODIFIED(f"   {cust.id} - {cust.gender} {cust.pan}   "))
        print('')
 