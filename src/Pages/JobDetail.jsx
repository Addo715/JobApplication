import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { manageJobsData } from '../assets/assets';
import NewNavbar from '../Components/NewNavbar';
import { div } from 'framer-motion/client';

const JobDetail = () => {
  const { id } = useParams();
  const job = manageJobsData.find((job) => job.uuid === id);

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl font-semibold text-gray-800">Job Not Found</h2>
        <p className="text-gray-600">Sorry, the job you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>   <NewNavbar/>
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
     
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <img
          src={job.image || 'https://via.placeholder.com/600x300'}
          alt={job.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{job.title}</h2>
        <p className="text-gray-600 mb-6">
          {job.description || 'You will be responsible for frontend and backend development tasks. You will work closely with our team.'}
        </p>
        <Link to= '/apply'>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          onClick={() => alert('Application process started!')}
        >
          Apply Now
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default JobDetail;