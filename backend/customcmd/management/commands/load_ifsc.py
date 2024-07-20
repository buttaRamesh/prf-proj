from django.core.management.base import BaseCommand, CommandParser
import csv
import os
from pathlib import Path
from ifsc.models import Ifsc

# print('pwd',os.getcwd())
# print('pwd',Path.cwd())

class Command(BaseCommand):
    help='Loads IFSC Table from csv file'

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument(
            'file_name',
            type=str,
            help='name of csv file'
        )

    def transformRow(self,row):
        if row[7]:
            row[7] = int(row[7])
        row[13] = int(row[13]) if row[13] else  0
            

        return row
    def handle(self,*args,**kwargs):
        # "G:\prf-proj\dataarch\IFSC.csv"
        # ".\..\dataarch\IFSC.csv"
        file_name = kwargs['file_name']
        self.stdout.write('Loading IFSC')
        self.stdout.write(file_name)
        # with open(file_name,errors='ignore') as file:
        #    reader = csv.reader(file)
        #    header = next(reader)
        #    print(header)
        #    print('')
        #    for _ in range(2):
        #        row = next(reader)
        #        print(row)
        #        print(int(row[7]),int(row[13]))
        #        print('')
        include_states = ['TELANGANA' , 'ANDHRA PRADESH']
        with open(file_name,errors='ignore') as file:
           reader = csv.reader(file)
           header = next(reader)
           print('Header info')
           print(header)
           print()
        #    tlist = [[row[0] , row[1],row[7],row[13]] for row in reader if row[1] == '']
        #    tlist = [row for row in reader if row[0] == '']
           
           tlist = [row for row in reader if row[5] in include_states]
           print(len(tlist),'records')
           tlist = [row for row in tlist  if  row[0] != '' ]
           print(len(tlist),'records')
        #    tlist = list(map(self.transformRow,tlist))
        #    cols = [0,1,2,3,4,5,6,7,10,13]
           cols = [1,0,2,3,10,4,5,7,6,13]
           tlist = [[row[col] for col in cols] for row in tlist]     
           print(len(tlist))
           ifsc_data = [
                Ifsc(
                    ifsc=row[0],
                    bank=row[1],
                    branch=row[2],
                    centre=row[3],
                    city=row[4],
                    district=row[5],
                    state=row[6],
                    contact=row[7],
                    address=row[8],
                    micr=row[9]
                    )
                for row in tlist
                ]      
           print(Ifsc)
           info = Ifsc.objects.all().delete()
           print(info)
           info = Ifsc.objects.bulk_create(ifsc_data)     
           print(len(info))


# ifsc 
# bank 
# branch 
# centre 
# city 
# district
# state  
# contact
# address 
# micr 