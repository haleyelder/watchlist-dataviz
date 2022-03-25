import TotalListTable from './components/TotalListTable.js';
import GenreBarChart from './components/GenreBarChart.js'
import RatingsScatterplotChart from './components/RatingsScatterplotChart.js'
import watchlistData from './watchlist-main.js'

function App() {
  return (
    <div classNameName="App">
      <h1>Table Data Watchlist</h1>
      <p>Feb 2021 - Feb 2022 watchlist </p>
      <h3>Key:</h3>
      <ul>
        <li> *  denotes rewatched movie/show</li>
        <li> TV seasons, Total seasons = released as of march 2022, seasons watched, separated by specific season</li> 
      </ul>

     <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="table-tab" data-toggle="tab" href="#total-list-table" role="tab" aria-controls="total-list-table" aria-selected="false">Total List Table</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="scatterplot-tab" data-toggle="tab" href="#ratings-scatterplot-chart" role="tab" aria-controls="ratings-scatterplot-chart" aria-selected="false">Ratings Scatterplot</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="barchart-tab" data-toggle="tab" href="#genre-barchart" role="tab" aria-controls="genre-barchart" aria-selected="false">Genre Barchart</a>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">test description</div>
      <div className="tab-pane fade" id="total-list-table" role="tabpanel" aria-labelledby="table-tab">
        <h3>Total List Table</h3>
        <TotalListTable watchlistData={watchlistData}/></div>
      <div className="tab-pane fade" id="ratings-scatterplot-chart" role="tabpanel" aria-labelledby="scatterplot-tab">
        <h3>Ratings Scatterplot Chart </h3>
        <RatingsScatterplotChart/></div>
      <div className="tab-pane fade" id="genre-barchart" role="tabpanel" aria-labelledby="barchart-tab">
        <h3>Genre Barchart</h3>
        <GenreBarChart/>
      </div>
    </div> 
      
    </div>
  );
}

export default App;
