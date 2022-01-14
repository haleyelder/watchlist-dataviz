# Watchlist Data Visualization

For most of 2021 and part into 2022, I've been noting down nearly every movie and tv show I have watched. This repo is using python to gather data from OMDB (open movie database API) to fill in some data points and later on use D3 as a data visualization. 

Steps/To Do:

## Python
[x] - reads csv file; only first row of titles; verify titles are correct/easier to API request later 
[x] - convert titles to lower case
[] - convert spaces to + (%20 if needed)
[x] - request using t=title&key= 
[] - save data fields to match in csv file; starting example fields below
    a. Title    
    b. Release Year
    c. Genre
    d. Type (movie or series)

## JavaScript/D3