import React, { PureComponent } from 'react';
import { BarChart, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Bar } from 'recharts';

import watchlistData from '../watchlist-main';

let totalGenres = []

for (let i = 0; i < watchlistData.length; i++){
  let genres = watchlistData[i].Genre.split(", ")
  totalGenres.push(genres)
}

// flatten array into one large array 
totalGenres = totalGenres.flat()

// count genres occurrences, push to new arr
const count = {}
for (const elem of totalGenres) {
  if (count[elem]) {
    count[elem] += 1
  } else {
    count[elem] = 1
  }
}

// data reads from arry of obj
const newListGenre = []
newListGenre.push(count)
console.log(newListGenre)

export default class GenreChart extends PureComponent {
  render() {
    return (

     <BarChart width={730} height={250} data={newListGenre}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="0" />

        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Action" fill="#8884d8" />
        <Bar dataKey="Adventure" fill="#82ca9d" />
        <Bar dataKey="Animation" fill="#8884d8" />
        <Bar dataKey="Biography" fill="#82ca9d" />
        <Bar dataKey="Comedy" fill="teal"/>
        <Bar dataKey="Crime" fill="#8884d8" />
        <Bar dataKey="Documentary" fill="#82ca9d" />
        <Bar dataKey="Drama" fill="teal"/>
        <Bar dataKey="Family" fill="teal"/>
        <Bar dataKey="Fantasy" fill="#8884d8" />
        <Bar dataKey="Game-Show" fill="#82ca9d" />
        <Bar dataKey="History" fill="teal"/>
        <Bar dataKey="Horror" fill="#8884d8" />
        <Bar dataKey="Music" fill="#82ca9d" />
        <Bar dataKey="Musical" fill="teal"/>
        <Bar dataKey="Mystery" fill="#8884d8" />
        <Bar dataKey="Reality-TV" fill="#82ca9d" />
        <Bar dataKey="Romance" fill="teal"/>
        <Bar dataKey="Sci-Fi" fill="#8884d8" />
        <Bar dataKey="Short" fill="#82ca9d" />
        <Bar dataKey="Sport" fill="teal"/>
        <Bar dataKey="Thriller" fill="#8884d8" />
        <Bar dataKey="Western" fill="#82ca9d" />
      </BarChart>
    );
  }
}
