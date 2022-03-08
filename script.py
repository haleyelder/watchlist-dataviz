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
    for row in reader:
        titles = row["Title"]
        print(titles)

# request IMDB info t=title name

payload = {"apikey":{APIKEY}}
r = requests.get("https://www.omdbapi.com/?t=" + titles, params=payload)
response = r.json()

if r.status_code == 200:
    print(response)
    
    titles = response["Title"]
    release_year = response["Year"]

    # future row titles
    fields = ["Title", "Years"]
    
    print("Titles: " + titles)
    print("Year: " + release_year)

    with open('watchlist-updated.csv', 'w', newline='') as csvfile:
        fieldnames = ['Title','Year','Genre','Runtime', 'Language', 'imdbVotes', 'Rated', 'Actors', 'Type', 'Awards', 'Ratings', 'Released', 'Writer', 'imdbRating', 'Poster', 'Director', 'totalSeasons', 'Plot', 'Mpe', 'Awards', 'Ratingsetascore', 'imdbID', 'Response', 'Country','Metascore','Production', 'BoxOffice', 'DVD', 'Website']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerow(response)

else: 
    print('an error has occurred')

