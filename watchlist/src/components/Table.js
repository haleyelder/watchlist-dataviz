import React from 'react'


class Table extends React.Component {
    render() {
        const { watchlistData } = this.props;

        // adding increment key ids to data
        watchlistData.forEach((item, i) => {
           item.id = i + 1
       })

        return (
            watchlistData.length > 0 && (   
                <table>
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>Date Watched/Completed</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Total Seasons Released</th>
                            <th>Season(s) Watched</th>
                            <th>IMDb Rating</th>
                            <th>Year</th>
                            <th>Genre(s)</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {watchlistData.map(id => (
                            <tr>
                                <td key={id}>{id.id}</td>
                                <td>{id.DateCompleted}</td>
                                <td><a href={`https://www.imdb.com/title/${id.imdbID}/`}>{id.Title}</a></td>
                                <td>{id.Type}</td>
                                <td>{id.totalSeasons}</td>
                                <td>{id.seasonsWatched}</td>
                                <td>{id.imdbRating}</td>
                                <td>{id.Year}</td>
                                <td>{id.Genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )
        )
    }
}

export default Table;