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
        <p>This project covers most* all movie and tv show titles I had watched from the beginning of February 2021 to February 2022. My tracking list included only the date watched, title, and specific seasons watched, if it was a TV show, the remaining data was requested using <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer">OMDb API</a> to fill in the rest. Each of the tabs below show this data in a large list and visual charts. The first is my entire watched titles list in table format, the second highlights the titles ratings provided from IMDb, and the third is a barchart showing the genre counts for the entire list. </p>

        <em>* I noticed over the year the tracking document might've been updated with formatting and deleted or shifted some titles along the way. 99% of the titles should be here, but I've missed some</em>
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
        <div className="tab-description">
          <p> KEY/NOTES: </p>
          <p> &#9702; <b>ID</b>: keeps track of the count of titles. <br/>
          &#9702;<b> Date Completed:</b> when the movie or show was watched/finished watching the season. <br/>
          &#9702; <b>Title</b> link to their respective IMDb page. Asterisks note a rewatched show or movie.<br/>
          &#9702; <b>Total Seasons Released:</b> as reported by IMDb.<br/>
          &#9702; <b>Seasons Watched: </b>these are listed out by specific season watched at the time marked "completed," there are some duplicates titles as some released a season earlier in the year and later.</p>
        </div>
        <TotalListTable watchlistData={watchlistData}/></div>
      <div className="tab-pane fade" id="ratings-scatterplot-chart" role="tabpanel" aria-labelledby="scatterplot-tab">
      <h4> </h4>
          <div className="tab-description">
          <p> KEY/NOTES: </p>
            <p>This chart shows the IMDb ratings (y axis) of each title spanned over the year (y axis). When hovering over a dot, you'll find the below structure:</p>
            <p>&#9702; (date) watched:<br/>
            &#9702; rating:<br/>
            &#9702; title:</p>
          </div>
        <RatingsScatterplotChart/></div>
      <div className="tab-pane fade" id="genre-barchart" role="tabpanel" aria-labelledby="barchart-tab">
      <div className="tab-description">
      <p> KEY/NOTES: </p>
          <p>This chart shows the total count of each genre watched over the year. Some titles had multiple genres and each were tallied to their respective group.</p>
        </div>
        <GenreBarChart/>
      </div>
    </div>
    </div>
  );
}

export default App;
