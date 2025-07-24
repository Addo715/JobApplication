// src/components/JobCard.jsx
import React from 'react';
import { Edit, Trash2, MapPin } from 'lucide-react';
import { useJobStore } from '../Store/useJobStore';

const JobCard = ({ job, onEdit, showControls = true }) => {
  const deleteJob = useJobStore((state) => state.deleteJob);

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (confirm) {
      deleteJob(job.uuid);
    }
  };

  const handleEdit = () => {
    onEdit(job); // Pass the job back to the form for editing
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border border-sky-500 rounded-lg shadow-md bg-white space-y-4">
      {/* Top Section with Logo and Job Title */}
      <div className="flex items-center gap-4">
        <img
          src={job.companyLogo || "/samsung_logo.png"}
          alt="Company Logo"
          className="w-14 h-14 rounded-md object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-sky-600">{job.jobTitle}</h2>
          <p className="text-gray-500">{job.jobCategory}</p>
        </div>
      </div>

      {/* Job Description */}
      <p className="text-gray-700">{job.jobDescription}</p>

      {/* Salary and Location */}
      <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-md">💰 {job.salary}</span>
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
          <MapPin className="w-4 h-4" /> {job.jobLocation}
        </span>
      </div>

      {/* Show controls only if allowed */}
      {showControls && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-sky-600 rounded hover:bg-sky-700"
          >
            <Edit className="w-4 h-4" /> Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default JobCard;
