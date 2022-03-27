import TotalListTable from './components/TotalListTable.js';
import GenreBarChart from './components/GenreBarChart.js'
import RatingsScatterplotChart from './components/RatingsScatterplotChart.js'
import watchlistData from './watchlist-main.js'

function App() {
  return (
    <div className="App">

      <div className='header'>
        <h2>Watchlist Data Analysis</h2>
        <p>Feb 2021 - Feb 2022 </p>
      </div>

      <div className='description'>
        <p>History: this project covers most* titles and shows I had watched from the beginning of February 2021 to February 2022. The total list is in the first table in a table, scatterplot to measure ratings for each title, and a total genre bar chart. </p>

        <em>* the doc might've been adjusted and deleted some titles along the way, I've definitely missed some</em>
     </div>

     <ul className="nav nav-tabs justify-content-center" id="tabs" role="tablist">
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
    <div className="tab-content" id="tabs-content">
      <div className="tab-pane fade show" id="total-list-table" role="tabpanel" aria-labelledby="table-tab">
        <h4 className="tab-description"> some description here </h4>
        <TotalListTable watchlistData={watchlistData}/></div>
      <div className="tab-pane fade" id="ratings-scatterplot-chart" role="tabpanel" aria-labelledby="scatterplot-tab">
      <h4 className="tab-description"> some description here </h4>
        <RatingsScatterplotChart/></div>
      <div className="tab-pane fade" id="genre-barchart" role="tabpanel" aria-labelledby="barchart-tab">
      <h4 className="tab-description"> some description here </h4>
        <GenreBarChart/>
      </div>
    </div>      
    </div>
  );
}

export default App;
