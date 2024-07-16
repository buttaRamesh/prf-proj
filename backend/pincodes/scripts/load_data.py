import json
from pincodes.models import Pincodes
def populate_db():
    # with open("pincodes.json", mode="r", encoding="utf-8") as read_file:
    #     records = json.load(  read_file)
    # record = records[1]
    # print(record)
    # print(record['StateName'])
    # pmodel = Pincodes(
    #     pincode=515631,
    #     city='Peddakotla',
    #     district='ANANTAPUR',
    #     state='ANDHRA PRADESH'
    # )
    with open("pincodes.json", mode="r", encoding="utf-8") as read_file:
        records = json.load(  read_file)

    # for i in range(5):
        # record = records[i]
    for record in records:
        pmodel = Pincodes(
            pincode=record['Pincode'],
            city=record['City'],
            state=record['StateName'],
            district=record['District'],
        )
        p = pmodel.save()

    print(f"records  inserted : {len(Pincodes.objects.all())}")

def clean_db():
    info = Pincodes.objects.all().delete()
    print(info)

def display_db():
   
    list = Pincodes.objects.all()
    # print(list)
    print('inserted records',len(list))
    pc = Pincodes.objects.filter(pincode=504301)
    print(pc)
def run():
    # populate_db()    
    display_db()
    # clean_db()