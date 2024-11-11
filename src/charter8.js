import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BarCharter8 = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: '2022',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 66, 75, 64, 60],
        backgroundColor: '#475569', // Tailwind's slate-600 color
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: '2023',
        data: [75, 62, 78, 85, 60, 58, 42, 73, 68, 77, 67, 63],
        backgroundColor: '#7F9CF5', // Another color for differentiation
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness within the container
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Inter', // Apply Inter font to legend labels
          },
        },
      },
      title: {
        display: true,
        text: 'Monthly Data for 2022 and 2023',
        font: {
          family: 'Inter', // Apply Inter font to the title
        },
      },
      datalabels: {
        color: 'white', // Label color inside bars
        anchor: 'end', // Position labels at the end of the bar (top)
        align: 'top', // Align labels to the top of the bar
        font: {
          family: 'Inter', // Apply Inter font to data labels
          weight: 'thin',
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
            family: 'Inter', // Apply Inter font to x-axis labels
          },
          minRotation: 0, // Set minimum rotation to 0 degrees
          maxRotation: 0, // Set maximum rotation to 0 degrees to keep labels horizontal
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
    <div style={{ width: '800px', height: '500px', margin: '0 auto' }}> {/* Centering and controlling size */}
      <h3>Bar Chart for 2022 and 2023</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarCharter8;

