import TotalListTable from './components/TotalListTable.js';
import GenreBarChart from './components/GenreBarChart.js'
import RatingsScatterplotChart from './components/RatingsScatterplotChart.js'
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

      <GenreBarChart/>
      <TotalListTable watchlistData={watchlistData}/>
      <RatingsScatterplotChart/>

     {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="table-tab" data-toggle="tab" href="#table" role="tab" aria-controls="table" aria-selected="false">Table</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="scatterplot-tab" data-toggle="tab" href="#scatterplot" role="tab" aria-controls="scatterplot" aria-selected="false">scatterplot</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="barchart-tab" data-toggle="tab" href="#barchart" role="tab" aria-controls="barchart" aria-selected="false">barchart</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">test description</div>
      <div class="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab"><Table watchlistData={watchlistData}/></div>
      <div class="tab-pane fade" id="scatterplot" role="tabpanel" aria-labelledby="scatterplot-tab"><RatingsScatterplotChart/></div>
      <div class="tab-pane fade" id="barchart" role="tabpanel" aria-labelledby="barchart-tab"><GenreChart/></div>
    </div>  */}
      
    </div>
  );
}

export default App;
