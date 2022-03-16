import ScatterplotChart from './components/ScatterplotChart.js';
import GenreChart from './components/GenreChart.js'
import Table from './components/Table.js'
import watchlistData from './watchlist-main.js'

function App() {
  return (
    <div className="App">
      <h1>Table Data Watchlist</h1>
      <p>Feb 2021 - Feb 2022 watchlist </p>
      <h3>Key:</h3>
      <ul>
        <li> *  denotes rewatched movie/show</li>
        <li> TV seasons, Total seasons = released as of march 2022, seasons watched, separated by specific season</li> 
      </ul>

      <ScatterplotChart/>
      <GenreChart/>

      <Table watchlistData={watchlistData}/>
    </div>
  );
}

export default App;
