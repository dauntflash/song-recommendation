import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import useFiles from './Mydata';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const { files } = useFiles({ Result: "" });

  const artistCounts = {};

  files.forEach((file) => {
    try {
      const content = JSON.parse(file.fileContent);
      content.forEach((song) => {
        if (song.artist) {
          artistCounts[song.artist] = (artistCounts[song.artist] || 0) + 1;
        }
      });
    } catch (e) {
      console.error("Error parsing file content:", e);
    }
  });

  const topArtists = Object.entries(artistCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const labels = topArtists.map(([artist]) => artist);
  const data = topArtists.map(([_, count]) => count);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Number of Songs by Artist',
        data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(201, 203, 207, 0.6)',
          'rgba(255, 105, 180, 0.6)',
          'rgba(255, 140, 0, 0.6)',
          'rgba(34, 193, 195, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(255, 105, 180, 1)',
          'rgba(255, 140, 0, 1)',
          'rgba(34, 193, 195, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 Artists in Playlists',
      },
    },
  };

  return (
    <>
      {files.length > 0 ? (
        <div className="chart-container">
          <div className='chart' style={{ width: '600px', height: '400px' }}>
            <Pie data={chartData} options={chartOptions} />
          </div>
          <div className="top-artists" style={{ marginTop: '20px' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Artist</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Number of Songs</th>
                </tr>
              </thead>
              <tbody>
                {topArtists.map(([artist, count], index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{artist}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="no-file">
          <p>No files have been uploaded yet, upload a file <Link to={"/upload"}><a href=' '>here</a></Link></p>
        </div>
      )}
    </>
  );
};

export default PieChart;