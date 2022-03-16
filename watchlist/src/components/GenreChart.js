import React, { PureComponent } from 'react';
import { BarChart, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Bar } from 'recharts';
import watchlistData from '../watchlist-main';

// tracking occurrences of genres to fit charts
for (let i = 0; i < watchlistData.length; i++){
    console.log(watchlistData[i].Genre)
}

export default class GenreChart extends PureComponent {
  render() {
    return (
     <BarChart width={730} height={250} data={watchlistData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Genre" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Action" fill="#8884d8" />
        <Bar dataKey="Adventure" fill="#82ca9d" />
      </BarChart>
    );
  }
}
