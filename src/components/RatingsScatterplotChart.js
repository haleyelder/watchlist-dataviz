import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import scatterData from '../scatter-data'
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {color: 'white'}
    },
    x: {
      ticks: {color: "white"}
    }
  },
};


export const data = {
  datasets: [
    {
      label: 'Ratings',
      data: scatterData,
      backgroundColor: 'rgba(165, 255, 255, .7)',
    },
  ],
};

export default function ScatterTest() {
  return <Scatter options={options} data={data} />;
}
