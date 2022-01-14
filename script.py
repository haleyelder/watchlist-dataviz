import csv
import os
from platform import release
import requests

from dotenv import load_dotenv
load_dotenv()

APIKEY = os.getenv("API_ENV_VAR")

# open file and output first line (titles only)
with open('watchlist.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader: 
        print(row[0].lower())

# request IMDB info i=title name

payload = {"apikey":{APIKEY}}
r = requests.get("https://www.omdbapi.com/?t=Ozark", params=payload)
response = r.json()

if r.status_code == 200:
    rows = []
    
    titles = response["Title"]
    release_year = response["Year"]

    # future row titles
    fields = ["Title", "Years"]
    
    print("Titles: " + titles)
    print("Year: " + release_year)
    
    fields = ['Title', 'Years']
    rows.append([titles])
    rows.append([release_year])

    # print(rows)

    # rows = [['LOTR', 1999, 'Fantasy','movie'],
    #         ['The Great', 2019, 'Drama', 'tv show'],
    #         ['Belfast', 2021, 'Drama', 'movie'],
    #         ['The Fall', 2008, 'Fantasy', 'movie']]

    filename = 'watchlist-updated.csv'

    with open(filename, 'w') as csvfile:
        csvwriter = csv.writer(csvfile)

        csvwriter.writerow(fields)
        csvwriter.writerows(rows)
else: 
    print('an error has occurred')

