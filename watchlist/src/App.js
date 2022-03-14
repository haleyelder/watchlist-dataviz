import ScatterplotChart from './components/ScatterplotChart.js';
import BubbleChart from './components/BubbleChart.js'
import Table from './components/Table.js'
import data from './watchlist-main.js'

function App() {
  return (
    <div className="App">
      <h1>Table Data Watchlist</h1>
      <p>Feb 2021 - Feb 2022 watchlist </p>
      <p>* denotes rewatched movie/show</p>
      <ScatterplotChart/>
      <BubbleChart/>
      <Table data={data}/>
    </div>
  );
}

export default App;
