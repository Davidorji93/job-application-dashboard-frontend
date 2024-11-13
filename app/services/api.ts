// app/services/api.ts

import axios from 'axios';

// Fetch job applications data
export const fetchApplications = async () => {
  const response = await axios.get('http://localhost:3001/api/applications');
  return response.data;
};

// Fetch job application statistics
export const fetchApplicationStats = async () => {
  const response = await axios.get('http://localhost:3001/api/applications/stats');
  return response.data;
};
