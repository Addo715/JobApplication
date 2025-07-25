import { useState } from 'react';
import { MoreHorizontal, Download } from 'lucide-react';

const JobApplicantsTable = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const applicants = [
    {
      id: 1,
      name: "Richard Sanford",
      jobTitle: "Full Stack Developer",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      name: "Enrique Murphy",
      jobTitle: "Data Scientist",
      location: "San Francisco",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      name: "Alison Powell",
      jobTitle: "Marketing Manager",
      location: "London",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 4,
      name: "Richard Sanford",
      jobTitle: "UI/UX Designer",
      location: "Dubai",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 5,
      name: "Enrique Murphy",
      jobTitle: "Full Stack Developer",
      location: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 6,
      name: "Alison Powell",
      jobTitle: "Data Scientist",
      location: "New Delhi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 7,
      name: "Richard Sanford",
      jobTitle: "Marketing Manager",
      location: "Chennai",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
    }
  ];

  const handleDropdownToggle = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleAction = (action, applicantName) => {
    alert(`${action} action for ${applicantName}`);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">User name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Job Title</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Location</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Resume</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={applicant.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={applicant.avatar}
                      alt={applicant.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {applicant.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{applicant.jobTitle}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{applicant.location}</td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                    <span>Resume</span>
                    <Download className="w-4 h-4" />
                  </button>
                </td>
                <td className="px-6 py-4 relative">
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(applicant.id)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <MoreHorizontal className="w-5 h-5 text-gray-500" />
                    </button>
                    
                    {activeDropdown === applicant.id && (
                      <div className="absolute right-0 top-8 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <button
                          onClick={() => handleAction('Accept', applicant.name)}
                          className="w-full px-3 py-2 text-left text-sm text-blue-700 hover:bg-blue-50 border-b border-gray-100 cursor-pointer"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleAction('Reject', applicant.name)}
                          className="w-full px-3 py-2 text-left text-sm text-red-700 hover:bg-red-50 cursor-pointer"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default JobApplicantsTable;