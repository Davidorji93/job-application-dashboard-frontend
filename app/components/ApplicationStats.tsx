"use client";

import { Pie } from 'react-chartjs-2';


const ApplicationStats = ({ stats }) => {
  const data = {
    labels: ['Accepted', 'Pending', 'Rejected'],
    datasets: [
      {
        data: [stats.accepted, stats.pending, stats.rejected],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };
  return <Pie data={data} />;
};

export default ApplicationStats;
