import React from "react";
import { useNavigate } from "react-router-dom";

const AdimUserLoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    alert("Logging in as Admin");
    navigate("/adminlogin");
  };

  const handleUserLogin = () => {
    alert("Logging in as User");
    navigate("/userlogin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome to JobBridge
          </h1>
          <p className="text-gray-500 mt-2">Choose your login type below</p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleAdminLogin}
            className="w-full py-3 text-white bg-sky-500 hover:bg-sky-600 rounded-lg text-base font-medium transition"
          >
            Login as Admin
          </button>

          <button
            onClick={handleUserLogin}
            className="w-full py-3 text-white bg-sky-600 hover:bg-sky-700 rounded-lg text-base font-medium transition"
          >
            Login as User
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 pt-2">
          © 2025 JobBridge. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdimUserLoginPage;
