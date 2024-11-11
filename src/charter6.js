import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BarCharter6 = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#475569', // Tailwind's slate-600 color
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness within the container
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Data' },
      datalabels: {
        color: 'white', // Label color inside bars
        anchor: 'end', // Position labels at the end of the bar (top)
        align: 'top', // Align labels to the top of the bar
        font: {
          weight: 'bold',
          size: 14,
        },
        offset: -25, // Adjusts the space between label and bar (optional)
        rotation: -90, // Rotate labels to be vertical
        
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            weight: 'bold', // Make x-axis labels bold
          },
        },
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
      y: {
        ticks: {
          display: false, // Remove y-axis labels
        },
        grid: {
          display: false, // Remove y-axis grid lines
        },
        border: {
          display: false, // Remove the y-axis line
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px', margin: '0 auto' }}> {/* Centering and controlling size */}
      BarChart 5
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarCharter6;
  