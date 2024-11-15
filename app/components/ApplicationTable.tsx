"use client";

interface Application {
  id: string;
  jobTitle: string;
  companyName: string;
  status: string;
  dateApplied: string;
}

interface ApplicationTableProps {
  applications: Application[];
}

const ApplicationTable = ({ applications }: ApplicationTableProps) => {
  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Status</th>
          <th>Date Applied</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app) => (
          <tr key={app.id}>
            <td>{app.jobTitle}</td>
            <td>{app.companyName}</td>
            <td>{app.status}</td>
            <td>{app.dateApplied}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicationTable;
