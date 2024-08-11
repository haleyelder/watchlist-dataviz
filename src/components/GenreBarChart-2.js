import React from 'react';
import watchlistData from '../watchlist-main';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
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
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };


let labels = genreTypes
let dataCounts = genreCounts
export const data = {
    labels,
  datasets: [
    {
      label: 'Genre Counts',
      data: dataCounts,
      backgroundColor: 'rgba(255, 255, 255, .75)',
    }
  ],
};

export default function GenreBarChart2() {
  return <Bar options={options} data={data} />;
}



// export default function GenreBarChart2() {
//     return (
//         <div>Genre</div>
//     )
// }

// export default class GenreBarChart extends PureComponent {
//   render() {
//     return (
//       <>
//      <BarChart width={850} height={400} data={newListGenre}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="0" />
//         <YAxis />
//         <Tooltip cursor={{fill: 'transparent'}}/>
//         <Legend />
//         <Bar dataKey="Action" fill="#8884d8" />
//         <Bar dataKey="Adventure" fill="#82ca9d" />
//         <Bar dataKey="Animation" fill="#C91B5D" />
//         <Bar dataKey="Biography" fill="orange" />
//         <Bar dataKey="Comedy" fill="#D6D2CA"/>
//         <Bar dataKey="Crime" fill="#BF4444" />
//         <Bar dataKey="Documentary" fill="#D2D5FF" />
//         <Bar dataKey="Drama" fill="#4AD3A3"/>
//         <Bar dataKey="Family" fill="#EEC6A0"/>
//         <Bar dataKey="Fantasy" fill="pink" />
//         <Bar dataKey="Game-Show" fill="goldenrod" />
//         <Bar dataKey="History" fill="lightblue"/>
//         <Bar dataKey="Horror" fill="lightgreen" />
//         <Bar dataKey="Music" fill="turquoise" />
//         <Bar dataKey="Musical" fill="orange"/>
//         <Bar dataKey="Mystery" fill="#FFCA60" />
//         <Bar dataKey="Reality-TV" fill="lightgray" />
//         <Bar dataKey="Romance" fill="#5B84FD"/>
//         <Bar dataKey="Sci-Fi" fill="#4AD3A3" />
//         <Bar dataKey="Short" fill="periwinkle" />
//         <Bar dataKey="Sport" fill="springgreen"/>
//         <Bar dataKey="Thriller" fill="#BDCBFF" />
//         <Bar dataKey="Western" fill="white" />
//       </BarChart>
//       </>
//     );
//   }
// }
