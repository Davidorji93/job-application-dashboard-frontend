import axios from 'axios';

// Fetch job applications data
export const fetchApplications = async () => {
  const response = await axios.get('https://job-application-dashboard-backend.onrender.com/api/applications');
  return response.data;
};

// Fetch job application statistics
export const fetchApplicationStats = async () => {
  const response = await axios.get('https://job-application-dashboard-backend.onrender.com/api/applications/stats');
  return response.data;
};
