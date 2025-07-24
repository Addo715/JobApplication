import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, jobsData, manageJobsData } from '../assets/assets';
import { useJobStore } from '../Store/useJobStore'; // Import Zustand store
import Footer from './Footer';

const Jobs = () => {
  const navigate = useNavigate();
  const { jobs } = useJobStore(); // Get jobs from Zustand store

  // Combine static jobs with dynamic jobs from store
  const allJobs = [
    ...manageJobsData.map(job => ({
      uuid: job.uuid,
      title: job.title,
      description: job.description || 'You will be responsible for frontend and backend development tasks. You will work closely with our...',
      image: job.image || 'https://via.placeholder.com/300x150'
    })),
    ...jobs.map(job => ({
      uuid: job.uuid,
      title: job.jobTitle, // Map jobTitle to title
      description: job.jobDescription || 'You will be responsible for frontend and backend development tasks. You will work closely with our...',
      image: job.companyLogo || 'https://via.placeholder.com/300x150'
    }))
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allJobs.map((job) => {
          return (
            <div
              key={job.uuid}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{job.title}</h2>
              <p className="text-gray-600 mb-4">
                {job.description}
              </p>
        
              <button
                onClick={() => navigate(`/user/${job.uuid}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          );
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Jobs;