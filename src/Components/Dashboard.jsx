import React from "react";
import {
  FileText,
  Pencil,
} from "lucide-react";
import NewNavbar from "./NewNavbar";
// import Navbar from "./Navbar";
import Footer from "./Footer";




const jobs = [
  {
    company: "Codetrain",
    title: "Full Stack Developer",
    location: "East legon",
    date: "22 Aug, 2024",
    status: "Pending",
  },
  {
    company: "AmaliTech",
    title: "Data Scientist",
    location: "Accra",
    date: "22 Aug, 2024",
    status: "Rejected",
  },
  {
    company: "CodeDev",
    title: "Marketing Manager",
    location: "Accra",
    date: "25 Sep, 2024",
    status: "Accepted",
  },
  {
    company: "Qualcomm",
    title: "UI/UX Designer",
    location: "Tema",
    date: "15 Oct, 2024",
    status: "Pending",
  },
  {
    company: "B. Foster",
    title: "Full Stack Developer",
    location: "Koforidua",
    date: "25 Sep, 2024",
    status: "Accepted",
  },
];

const statusColors = {
  Accepted: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
};

const Dashboard = () => {
  return (
    <div>
    <NewNavbar /> 

    <div>
    <div className="p-6 max-w-5xl mx-auto bg-white shadow rounded-lg mt-10">
      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Resume</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
            <FileText size={16} /> Resume
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            <Pencil size={16} /> Edit
          </button>
        </div>
      </div> */}

      <h3 className="text-lg font-medium text-gray-700 mb-4">Jobs Applied</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">Company</th>
              <th className="px-4 py-3 border-b">Job Title</th>
              <th className="px-4 py-3 border-b">Location</th>
              <th className="px-4 py-3 border-b">Date</th>
              <th className="px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {jobs.map((job, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium">{job.company}</td>
                <td className="px-4 py-3 border-b">{job.title}</td>
                <td className="px-4 py-3 border-b">{job.location}</td>
                <td className="px-4 py-3 border-b">{job.date}</td>
                <td className="px-4 py-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <Footer />

    </div>
  );
};

export default Dashboard;