
import React, { useState } from 'react';
import { Plus, Users, Briefcase, Eye, Edit, Trash2, MapPin, Calendar } from 'lucide-react';

const JobPortalApp = () => {
  const [activeTab, setActiveTab] = useState('add');

  const TabButton = ({ label, icon: Icon, tabKey }) => (
    <button
      onClick={() => setActiveTab(tabKey)}
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
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">InsiderJobs</span>
        </div>
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

  // Placeholder components for each tab
  const AddJobsPage = () => (
    <Section>
      <h2 className="text-2xl font-semibold text-gray-800">Add Jobs</h2>
      <p className="text-gray-600">Post new job opportunities with detailed descriptions and requirements to attract top talent.</p>
    </Section>
  );

  const ViewApplicationsPage = () => (
    <Section>
      <h2 className="text-2xl font-semibold text-gray-800">View Applications</h2>
      <p className="text-gray-600">Browse and manage applications submitted for various job listings.</p>
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
    </div>
  );
};

export default JobPortalApp;

