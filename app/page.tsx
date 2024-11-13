"use client";
import { useEffect, useState } from 'react';
import { fetchApplications, fetchApplicationStats } from './services/api';

import ApplicationTable from '../components/ApplicationTable';
import ApplicationStats from '../components/ApplicationStats';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({ accepted: 0, pending: 0, rejected: 0 });
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    const loadData = async () => {
      try {
        const applicationsData = await fetchApplications();
        const statsData = await fetchApplicationStats();
        setApplications(applicationsData);
        setStats(statsData);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Job Application Dashboard</h1>
        <p>Loading...</p> {/* Optionally add a loading spinner here */}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Application Dashboard</h1>
      <ApplicationTable applications={applications} />
      <ApplicationStats stats={stats} />
    </div>
  );
};

export default Dashboard;
