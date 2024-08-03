from typing import Any
from django.core.management.base import BaseCommand, CommandParser
from banks.seed.factory import BankAccountFactory

class Command(BaseCommand):
    help='populate acctounts'
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
         accts_list = BankAccountFactory.build_batch(self.size)
         self.stdout.write(self.style.SUCCESS(f'\nBuild {len(accts_list)} records'))
         
         if self.show:
            self._show_records(accts_list)
    
    def _create(self):
        accts_list = BankAccountFactory.create_batch(self.size)
        self.stdout.write(self.style.SUCCESS(f'\nSaved {len(accts_list)} records'))

        if self.show:
            self._show_records(accts_list)

    def clean(self):
        BankAccountFactory.delete_records()
    
    def _show_records(self,accts_list):
        sz = min(5,len(accts_list))
        for idx in range(sz):
            acct=accts_list[idx]
            self.stdout.write(self.style.HTTP_NOT_MODIFIED(f"{acct.id}  {acct.account_number}  {acct.account_type}" ))
