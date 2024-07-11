import React from 'react';
import { Bar } from 'react-chartjs-2';

const CropPlot = ({ crops }) => {
  // Assuming crops is an array of top 5 crops with percentages
  const cropLabels = crops.map((crop, index) => `Crop ${index + 1}`);
  const cropPercentages = crops.map(crop => crop.percentage); // Assuming you have percentages for the chart

  const data = {
    labels: cropLabels,
    datasets: [
      {
        label: 'Crop Percentage',
        data: cropPercentages,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxis: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="crop-plot">
      <h2>Top 5 Crops Plot</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CropPlot;
