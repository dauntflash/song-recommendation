useEffect(() => {
  fetch("/path/to/songs.json")
    .then(response => response.json())
    .then(data => setSongs(data));
}, []);


import React from "react";
import ReactDOM from "react-dom";
import TopSongsChart from "./TopSongsChart";

function App() {
  return (
    <div>
      <h1>Top 10 Songs Stats</h1>
      <TopSongsChart />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


import React from "react";
import { Bar } from "react-chartjs-2";
import songsData from "./songs.json"; // Your JSON file

const TopSongsChart = () => {
  // Sort songs by plays and get the top 10
  const topSongs = songsData.sort((a, b) => b.plays - a.plays).slice(0, 10);

  // Prepare data for the chart
  const data = {
    labels: topSongs.map(song => song.song), // Song names for X-axis
    datasets: [
      {
        label: "Plays",
        data: topSongs.map(song => song.plays), // Plays for Y-axis
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Top 10 Songs by Plays"
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopSongsChart;


[
  {
    "song": "Song A",
    "artist": "Artist A",
    "plays": 120
  },
  {
    "song": "Song B",
    "artist": "Artist B",
    "plays": 95
  },
  {
    "song": "Song C",
    "artist": "Artist C",
    "plays": 150
  }
  // More songs...
]
