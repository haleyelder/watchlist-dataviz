import React from 'react';
import watchlistData from '../watchlist-main';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  );


// filters all genres and put in one large array
let totalGenres = []
for (let genre in watchlistData) {
  totalGenres.push(watchlistData[genre].Genre.split(', '))
}
totalGenres = totalGenres.flat()


// count genres occurrences, push to new obj
const count = {}
for (const elem of totalGenres) {
  if (count[elem]) {
    count[elem] += 1

  } else {
    count[elem] = 1
  }
}

// for chart props, push genre counts
let genreTypes =[]
let genreCounts = []
for (let x in count) {
  genreTypes.push([x])
  genreCounts.push(count[x])
  // console.log(`genre: ${x}\ncount: ${count[x]}`)
}

genreTypes = genreTypes.flat()

export const options = {
    indexAxis: 'y',
    scales: {
      y: {
        ticks: {color: 'white'}
      },
      x: {
        ticks: {color: 'white'}
      }
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
  };


let labels = genreTypes
let dataCounts = genreCounts
export const data = {
    labels,
  datasets: [
    {
      label: 'Genre Counts',
      data: dataCounts,
      backgroundColor: 'rgba(165, 255, 255, .5)',
    }
  ],
};

export default function GenreBarChart2() {
  return <Bar options={options} data={data} />;
}
