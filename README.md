# Watchlist Data Visualization

** <b>[live link!](https://watchlist-data-analysis.netlify.app/)</b> ** 

![Watchlist Data Visualization/Analysis](watchlist-dashboard.jpg "Watchlist Data Visualization/Analysis")

From early February 2021 to February 2022, I have been noting down most every title and show I had watched during the year and wanted to put this data into some sort of visualization. There are many data sets out there to experiment with, but this has a bit more personal flair to it. 

Initially, I had wanted to practice some Python scripting to read my file and request data from an API, but did not have enough practice or knowledge at this time to figure it out in a timely manner. Instead, I found you can collect API data through Google Sheets "IMPORTDATA" to speed up this process to gathering the data. 

For the visualization part of the project, again, I <i>thought </i> I was going to try and use [D3](https://d3js.org/) but went with [Recharts](https://recharts.org/en-US) instead as I was using React for the front end portion. 

From the above, the original plan didn't work out, but I did find some new technologies to use and learn about! 😅

---------------------
KNOWN ISSUES (contenders for v2):
- on hover for Recharts made parts of the chart, titles, or genres "jump"
- opted to not add a key for the listing as the data does not change in this project but im aware of React's [List and Keys](https://reactjs.org/docs/lists-and-keys.html) recommendation
- Type error with the scatterplot Rechart usage with this warning <code> Warning: Received NaN for the `width` attribute. If this is expected, cast the value to a string. </code>