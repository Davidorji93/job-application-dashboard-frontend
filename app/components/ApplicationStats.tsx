"use client";

import { Pie } from 'react-chartjs-2';

// Define the expected type for `stats`
interface StatsProps {
  accepted: number;
  pending: number;
  rejected: number;
}

// Specify `stats` as the expected prop type for the component
const ApplicationStats = ({ stats }: { stats: StatsProps }) => {
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
