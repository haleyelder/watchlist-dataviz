import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import watchlistData from '../watchlist-main';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 600, pv: 2100, amt: 2200},{name: 'Page C', uv: 2000, pv: 2000, amt: 2000}];

function ScatterplotChart() {
    return (
      <LineChart width={600} height={300} data={watchlistData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="DateCompleted" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
    
}

export default ScatterplotChart