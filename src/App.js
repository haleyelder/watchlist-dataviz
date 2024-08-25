import TotalListTable from "./components/TotalListTable.js";
import GenreBarChart from "./components/GenreBarChart.js";
import RatingsScatterplotChart from "./components/RatingsScatterplotChart.js";
import watchlistData from "./watchlist-main.js";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Watchlist Data Analysis</h2>
        <p>Feb 2021 - Feb 2022 </p>
      </div>

      <div className="description"></div>

      <ul
        className="nav nav-tabs justify-content-center"
        id="tabs"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link"
            id="table-tab"
            data-toggle="tab"
            href="#total-list-table"
            role="tab"
            aria-controls="total-list-table"
            aria-selected="false"
          >
            Total List Table
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="scatterplot-tab"
            data-toggle="tab"
            href="#ratings-scatterplot-chart"
            role="tab"
            aria-controls="ratings-scatterplot-chart"
            aria-selected="false"
          >
            Ratings Scatterplot
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="barchart-tab"
            data-toggle="tab"
            href="#genre-barchart"
            role="tab"
            aria-controls="genre-barchart"
            aria-selected="false"
          >
            Genre Barchart
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="about-tab"
            data-toggle="tab"
            href="#about"
            role="tab"
            aria-controls="about"
            aria-selected="false"
          >
            About
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-content">
        <div
          className="tab-pane fade show"
          id="total-list-table"
          role="tabpanel"
          aria-labelledby="table-tab"
        >
          <div className="tab-description">
            <p> KEY/NOTES: </p>
            <p>
              {" "}
              &#9702;<b> Date Completed:</b> when the movie or show was
              watched/finished watching the season. <br />
              &#9702; <b>Title</b> linked to their respective IMDb page.
              Asterisks denote a rewatched show or movie.
              <br />
              &#9702; <b>Seasons Watched: </b>these are listed out by specific
              season watched at the time marked "completed," there are some
              duplicates titles as some released a season earlier in the year
              and later.
            </p>
          </div>
          <TotalListTable watchlistData={watchlistData} />
        </div>
        <div
          className="tab-pane fade"
          id="ratings-scatterplot-chart"
          role="tabpanel"
          aria-labelledby="scatterplot-tab"
        >
          <div className="tab-description">
            <p> KEY/NOTES: </p>
            <p>
              This chart shows the IMDb ratings (y axis) of titles in chronological order. The chart did not allow for titles, but the first number will correspond with the ID on the Total List Table tab.
            </p>
          </div>

          <RatingsScatterplotChart />
        </div>
        <div
          className="tab-pane fade"
          id="genre-barchart"
          role="tabpanel"
          aria-labelledby="barchart-tab"
        >
          <div className="tab-description">
            <p> KEY/NOTES: </p>
            <p>
              This chart shows the total count of each genre watched over the
              year. Some titles had multiple genres and each were tallied to
              their respective group.
            </p>
            <p class="mobile-landscape">
              <em>Best viewed in landscape mode on mobile</em>
            </p>
          </div>
          <GenreBarChart />
        </div>

        <div
          className="tab-pane fade"
          id="about"
          role="tabpanel"
          aria-labelledby="about"
        >
          <h4> </h4>
          <div className="tab-description">
            <p>
              This project covers most* all movie and tv show titles I watched
              from early February 2021 to February 2022. My tracking list
              included only the date watched, title, and specific seasons
              watched, if it was a TV show, the remaining data was requested
              using{" "}
              <a
                href="https://www.omdbapi.com/"
                target="_blank"
                rel="noreferrer"
              >
                OMDb API
              </a>{" "}
              to fill in the rest. Each tab shows this data in a tabular list
              and visual charts.
            </p>
            <em>
              * I noticed over the year the tracking document might've been
              updated with formatting and deleted or shifted some titles along
              the way. 99% of the titles should be here, but I've missed some
            </em>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
