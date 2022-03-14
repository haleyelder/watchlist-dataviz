# Watchlist Data Visualization

For most of 2021 and part into 2022, I've been noting down nearly every movie and tv show I have watched. This repo is using python to gather data from OMDB (open movie database API) to fill in some data points and later on use D3 as a data visualization. 

Steps/To Do:

## Python
- [x] reads csv file; only first row of titles; verify titles are correct/easier to API request later 
- [x] convert titles to lower case
- [ ] ~convert spaces to + (%20 if needed)~
- [x] request using t=title&key= 
- [ ] ~save data fields to match in csv file~
- [ ] ~multiple API requests per line~
- [ ] ~update singular csv file with all data (completion date is manual)~

Found a solution through Google Sheets and an API call instead!

## JavaScript/D3
- [x} requested API data through dynamic calls with google sheets, cleaned/formatted data, and placed in watchlist-main.json
  - [x] need to add dates, seasons to specify for shows
TABS (vertial left sidebar with bootstrap):
- [x] sort/filterable total table, date watched, genre, rating, type, links to imdb page, etc
  - [ ] add sorting function
- [ ] dot plot chart for over time (x axis is time/date, y is imdb rating and/or year released) (https://observablehq.com/@d3/dot-plot or https://observablehq.com/@d3/scatterplot), hovering dot displays title and date watched (maybe link to spot on table?)
- [ ] bubble chart groupings(https://observablehq.com/@d3/zoomable-circle-packing or https://observablehq.com/@d3/bubble-chart): genres
- optional: all in one data? inner radial is date (https://observablehq.com/@d3/radial-stacked-bar-chart-ii)