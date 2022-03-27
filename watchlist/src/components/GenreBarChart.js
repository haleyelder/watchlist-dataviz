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


export default class GenreBarChart extends PureComponent {
  render() {
    return (
      <>
     <BarChart width={850} height={400} data={newListGenre}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="0" />
        <YAxis />
        <Tooltip cursor={{fill: 'transparent'}}/>
        <Legend />
        <Bar dataKey="Action" fill="#8884d8" />
        <Bar dataKey="Adventure" fill="#82ca9d" />
        <Bar dataKey="Animation" fill="#C91B5D" />
        <Bar dataKey="Biography" fill="orange" />
        <Bar dataKey="Comedy" fill="#D6D2CA"/>
        <Bar dataKey="Crime" fill="#BF4444" />
        <Bar dataKey="Documentary" fill="#D2D5FF" />
        <Bar dataKey="Drama" fill="#4AD3A3"/>
        <Bar dataKey="Family" fill="#EEC6A0"/>
        <Bar dataKey="Fantasy" fill="pink" />
        <Bar dataKey="Game-Show" fill="goldenrod" />
        <Bar dataKey="History" fill="lightblue"/>
        <Bar dataKey="Horror" fill="lightgreen" />
        <Bar dataKey="Music" fill="turquoise" />
        <Bar dataKey="Musical" fill="orange"/>
        <Bar dataKey="Mystery" fill="#FFCA60" />
        <Bar dataKey="Reality-TV" fill="lightgray" />
        <Bar dataKey="Romance" fill="#5B84FD"/>
        <Bar dataKey="Sci-Fi" fill="#4AD3A3" />
        <Bar dataKey="Short" fill="periwinkle" />
        <Bar dataKey="Sport" fill="springgreen"/>
        <Bar dataKey="Thriller" fill="#BDCBFF" />
        <Bar dataKey="Western" fill="white" />
      </BarChart>
      </>
    );
  }
}
