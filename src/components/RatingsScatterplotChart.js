import React, { PureComponent } from 'react';
import { ScatterChart, ZAxis, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import watchlistData from '../watchlist-main';



export default class RatingsScatterplotChart extends PureComponent {

  render() {
    return (
    <ScatterChart width={850} height={475} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="DateCompleted" name="watched" />
        <YAxis dataKey="imdbRating" name="rating" />
        <ZAxis dataKey="Title" name="title" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Titles" data={watchlistData} fill="#A6FFFF" />
    </ScatterChart>
    );
  }
}
