import Table from './Table.js'
import data from './watchlist-main.js'

function App() {
  return (
    <div className="App">
      <h3>Table Data Watchlist</h3>
      <Table data={data}/>
    </div>
  );
}

export default App;
