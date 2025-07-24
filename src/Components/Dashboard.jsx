import React from "react";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import NewNavbar from "./NewNavbar";
import Footer from "./Footer";

const jobs = [
  {
    company: "Codetrain",
    title: "Full Stack Developer",
    location: "East Legon",
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

const statusStyles = {
  Accepted: {
    color: "text-green-700",
    bg: "bg-green-100",
    icon: <CheckCircle size={16} className="mr-1" />,
  },
  Pending: {
    color: "text-yellow-700",
    bg: "bg-yellow-100",
    icon: <Clock size={16} className="mr-1" />,
  },
  Rejected: {
    color: "text-red-700",
    bg: "bg-red-100",
    icon: <XCircle size={16} className="mr-1" />,
  },
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NewNavbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 border-b-4 border-sky-600 inline-block pb-2">
          Jobs Applied
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4 text-left">Company</th>
                <th className="px-6 py-4 text-left">Job Title</th>
                <th className="px-6 py-4 text-left">Location</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job, idx) => {
                const style = statusStyles[job.status];
                return (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {job.company}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{job.title}</td>
                    <td className="px-6 py-4 text-gray-700">{job.location}</td>
                    <td className="px-6 py-4 text-gray-500">{job.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.color}`}
                      >
                        {style.icon}
                        {job.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
