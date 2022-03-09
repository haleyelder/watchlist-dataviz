import csv
import os
from platform import release
import requests
import json

from dotenv import load_dotenv
load_dotenv()

APIKEY = os.getenv("API_ENV_VAR")

# open file and output first line (titles only)
with open('watchlist-small.csv', 'r') as file:
    reader = csv.DictReader(file)
    # save and append listed titles to list
    # newRow = []
    for row in reader:
        titlesList = row["Title"]
        # newRow.append(titlesList)
    # print(newRow)

# request IMDB info t=title name
payload = {"apikey":{APIKEY}}
# for titles in newRow:
#     print(titles)
r = requests.get("https://www.omdbapi.com/?t=" + titlesList, params=payload)
response = r.json()

if r.status_code == 200:
    print(response)
    with open('watchlist-updated.csv', 'w', newline='') as csvfile:
        fieldnames = ['Title','Year','Genre','Runtime', 'Language', 'imdbVotes', 'Rated', 'Actors', 'Type', 'Awards', 'Ratings', 'Released', 'Writer', 'imdbRating', 'Poster', 'Director', 'totalSeasons', 'Plot', 'Mpe', 'Awards', 'Ratingsetascore', 'imdbID', 'Response', 'Country','Metascore','Production', 'BoxOffice', 'DVD', 'Website']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerow(response)

else: 
    print('an error has occurred')

