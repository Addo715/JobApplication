import React, { useState } from 'react';
import { Plus, Users, Briefcase, Eye, Edit, Trash2, MapPin, Calendar, X, Upload, Image } from 'lucide-react';
import { PiBridgeBold } from "react-icons/pi";
import JobCard from './JobCard';
import { useJobStore } from '../Store/useJobStore'; // 
import JobApplicantsTable from './JobApplicantsTable';
import { Link } from 'react-router-dom';

const JobPortalApp = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null); 
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    jobCategory: 'Programming',
    jobLocation: 'Canada',
    jobLevel: 'Senior Level',
    salary: '',
    companyLogo: null
  });

  const { addJob, updateJob, jobs } = useJobStore(); // 

  const TabButton = ({ label, icon: Icon, tabKey }) => (
    <button
      onClick={() => {
        setActiveTab(tabKey);
        if (tabKey === 'add') {
          setShowJobForm(true);
        }
      }}
      className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition-colors whitespace-nowrap shadow-sm ${
        activeTab === tabKey
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" /> {label}
    </button>
  );

  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <Link to="/user">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer">
            <PiBridgeBold className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">JobBridge</span>
        </div>
        </Link>
        <div className="flex flex-wrap gap-3">
          <TabButton label="Add Jobs" icon={Plus} tabKey="add" />
          <TabButton label="View Applications" icon={Users} tabKey="applications" />
          <TabButton label="Manage Jobs" icon={Briefcase} tabKey="manage" />
        </div>
      </div>
    </nav>
  );

  const ContentWrapper = ({ children }) => (
    <div className="pt-24 px-6 max-w-6xl mx-auto space-y-8">{children}</div>
  );

  const Section = ({ children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">{children}</div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          companyLogo: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  //  Enhanced handleEdit function
  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      jobTitle: job.jobTitle,
      jobDescription: job.jobDescription,
      jobCategory: job.jobCategory,
      jobLocation: job.jobLocation,
      jobLevel: job.jobLevel,
      salary: job.salary,
      companyLogo: job.companyLogo
    });
    setShowJobForm(true);
  };

  //  Enhanced handleSubmit to handle both add and update
  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      jobTitle: formData.jobTitle,
      jobDescription: formData.jobDescription,
      jobCategory: formData.jobCategory,
      jobLocation: formData.jobLocation,
      jobLevel: formData.jobLevel,
      salary: formData.salary,
      companyLogo: formData.companyLogo
    };

    if (editingJob) {
      // Update existing job
      updateJob(editingJob.uuid, jobData);
    } else {
      // Add new job
      addJob(jobData);
    }

    // Reset form and close popup
    setShowJobForm(false);
    setEditingJob(null);
    setFormData({
      jobTitle: '',
      jobDescription: '',
      jobCategory: 'Programming',
      jobLocation: 'Bangalore',
      jobLevel: 'Senior Level',
      salary: '',
      companyLogo: null
    });
  };

  //  Enhanced cancel handler
  const handleCancel = () => {
    setShowJobForm(false);
    setEditingJob(null);
    setFormData({
      jobTitle: '',
      jobDescription: '',
      jobCategory: 'Programming',
      jobLocation: 'Bangalore',
      jobLevel: 'Senior Level',
      salary: '',
      companyLogo: null
    });
  };

  const JobFormPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            {editingJob ? 'Edit Job' : 'Add New Job'}
          </h2>
          <button
            onClick={handleCancel}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Company Logo Upload */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Company Logo</label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                {formData.companyLogo ? (
                  <img
                    src={formData.companyLogo}
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Image className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <div>
                <input
                  type="file"
                  id="companyLogo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="companyLogo"
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Upload Logo
                </label>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>

          {/* Job Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="Type here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Job Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleInputChange}
              placeholder="Type here"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              required
            />
          </div>

          {/* Dropdown Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Job Category</label>
              <select
                name="jobCategory"
                value={formData.jobCategory}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Job Location</label>
              <select
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                <option value="Canada">Canada</option>
                <option value="Ghana">Ghana</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
                <option value="USA">USA</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* Level */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Job Level</label>
              <select
                name="jobLevel"
                value={formData.jobLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
                <option value="Lead Level">Lead Level</option>
                <option value="Manager Level">Manager Level</option>
              </select>
            </div>
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {editingJob ? 'UPDATE' : 'ADD'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const AddJobsPage = () => (
    <Section>
      <h2 className="text-2xl font-semibold text-gray-800">Add Jobs</h2>
      <p className="text-gray-600">Post new job opportunities with detailed descriptions and requirements to attract top talent.</p>
      <button
        onClick={() => setShowJobForm(true)}
        className="mt-4 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-5 h-5" />
        Add New Job
      </button>

      {jobs.map((job) => (
        <JobCard key={job.uuid} job={job} onEdit={handleEdit} />
      ))}
    </Section>
  );

  const ViewApplicationsPage = () => (
    <Section>
      <h2 className="text-2xl font-semibold text-gray-800">View Applications</h2>
      <p className="text-gray-600">Browse and manage applications submitted for various job listings.</p>

      <JobApplicantsTable/>
    </Section>
  );

  const ManageJobsPage = () => (
    <Section>
      <h2 className="text-2xl font-semibold text-gray-800">Manage Jobs</h2>
      <p className="text-gray-600">Edit, update, or remove existing job posts and monitor their performance.</p>
    </Section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContentWrapper>
        {activeTab === 'add' && <AddJobsPage />}
        {activeTab === 'applications' && <ViewApplicationsPage />}
        {activeTab === 'manage' && <ManageJobsPage />}
      </ContentWrapper>

      {showJobForm && <JobFormPopup />}
    </div>
  );
};

export default JobPortalApp;