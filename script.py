import csv
import os
import requests

from dotenv import load_dotenv

load_dotenv()

API_ENV_VAR = os.getenv('API_ENV_VAR')

# reads OG watchlist and outputs first row, show/movie titles
# convert to tower case for search ease?
with open('watchlist.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader: 
        print(row[0].lower())

r = requests.get('https://www.omdbapi.com/?i=tt0167260&apikey=API_ENV_VAR',data={'key': 'value'})
print(r.text)


# request info from imdb api

# print to new csv file with details input
# title
# genre
# release date 
# more later

# example search query with API key https://www.omdbapi.com/?s=Lord%20Of%20The%20Rings&apikey=API_ENV_VAR

# example output; need imdbID 
# {
# "Title": "The Lord of the Rings: The Return of the King",
# "Year": "2003",
# "imdbID": "tt0167260",
# "Type": "movie",
# "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
# },

# more data with this 
# https://www.omdbapi.com/?i=tt0167260&apikey=API_ENV_VAR
# write to csv test
fields = ['Title', 'Release Year', 'Genre', 'Type']
rows = [['LOTR', 1999, 'Fantasy','movie'],
        ['The Great', 2019, 'Drama', 'tv show'],
        ['Belfast', 2021, 'Drama', 'movie'],
        ['The Fall', 2008, 'Fantasy', 'movie']]

filename = 'watchlist-updated.csv'

with open(filename, 'w') as csvfile:
    csvwriter = csv.writer(csvfile)

    csvwriter.writerow(fields)
    csvwriter.writerows(rows)