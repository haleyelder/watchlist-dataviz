import React, { PureComponent } from 'react';
import { ScatterChart, ZAxis, Scatter, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import watchlistData from '../watchlist-main';

export default class ScatterplotChart extends PureComponent {

  render() {
    return (
    <ScatterChart width={730} height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="DateCompleted" name="watched: " unit="" />
        <YAxis dataKey="imdbRating" name="rating: " unit="" />
        {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Titles" data={watchlistData} fill="#008080" />
    </ScatterChart>
    );
  }
}
