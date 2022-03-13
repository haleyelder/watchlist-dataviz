import React from 'react'


class Table extends React.Component {
    render() {
        const { data } = this.props;

        return (
            data.length > 0 && (
                <table className = 'text-left'>
                    <thead>
                        <tr>
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
                        {data.map(p => (
                            <tr>
                                <td>{p.DateCompleted}</td>
                                <td>{p.Title}</td>
                                <td>{p.Type}</td>
                                <td>{p.totalSeasons}</td>
                                <td>{p.seasonsWatched}</td>
                                <td>{p.imdbRating}</td>
                                <td>{p.Year}</td>
                                <td>{p.Genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )
        )
    }
}

export default Table;