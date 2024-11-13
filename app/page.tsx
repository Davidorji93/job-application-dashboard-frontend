// app/page.tsx
"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';  // Import for dynamic imports
import { fetchApplications, fetchApplicationStats } from './services/api';

// Dynamically import components to make them client-only
const ApplicationTable = dynamic(() => import('./components/ApplicationTable'), { ssr: false });
const ApplicationStats = dynamic(() => import('./components/ApplicationStats'), { ssr: false });

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({ accepted: 0, pending: 0, rejected: 0 });
  const [isLoading, setIsLoading] = useState(true);

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
        <p>Loading...</p>
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
