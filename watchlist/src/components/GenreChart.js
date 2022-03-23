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

     <BarChart width={900} height={500} data={newListGenre}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="0" />

        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Action" fill="#8884d8" />
        <Bar dataKey="Adventure" fill="#82ca9d" />
        <Bar dataKey="Animation" fill="red" />
        <Bar dataKey="Biography" fill="orange" />
        <Bar dataKey="Comedy" fill="teal"/>
        <Bar dataKey="Crime" fill="gray" />
        <Bar dataKey="Documentary" fill="purple" />
        <Bar dataKey="Drama" fill="teal"/>
        <Bar dataKey="Family" fill="indigo"/>
        <Bar dataKey="Fantasy" fill="pink" />
        <Bar dataKey="Game-Show" fill="goldenrod" />
        <Bar dataKey="History" fill="lightblue"/>
        <Bar dataKey="Horror" fill="green" />
        <Bar dataKey="Music" fill="turquoise" />
        <Bar dataKey="Musical" fill="orange"/>
        <Bar dataKey="Mystery" fill="maroon" />
        <Bar dataKey="Reality-TV" fill="lightgray" />
        <Bar dataKey="Romance" fill="blueviolet"/>
        <Bar dataKey="Sci-Fi" fill="brown" />
        <Bar dataKey="Short" fill="periwinkle" />
        <Bar dataKey="Sport" fill="springgreen"/>
        <Bar dataKey="Thriller" fill="darkgreen" />
        <Bar dataKey="Western" fill="black" />
      </BarChart>
    );
  }
}
