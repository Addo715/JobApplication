import React, { useState, useRef } from "react";
import NewNavbar from "../Components/NewNavbar";

const JobStatus = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file selection (via click or drag-and-drop)
  const handleFileChange = (event) => {
    const file = event.target.files[0] || event.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a PDF file.");
    }
  };

  // Handle drag-and-drop events
  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("border-blue-500");
  };

  const handleDragLeave = (event) => {
    event.currentTarget.classList.remove("border-blue-500");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-blue-500");
    handleFileChange(event);
  };

  // Handle Upload File button
  const handleUpload = () => {
    if (selectedFile) {
      // Simulate upload and show success notification
      alert("Submitted successfully");
      // Optionally reset after upload
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      alert("No file selected.");
    }
  };

  // Handle Cancel button
  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <NewNavbar />
      <div className="pb-10 flex items-center justify-center pt-10 sm:pt-12 bg-gray-100">
        <div className="mx-4 sm:mx-8 max-w-md w-full p-6 bg-white rounded-lg border border-gray-500/30 shadow-[0px_1px_15px_0px] shadow-black/10 text-sm">
          <div className="flex items-center justify-center w-11 h-11 bg-gray-500/10 rounded-full">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.124 11.083h4.75m5.541 3.959a1.584 1.584 0 0 1-1.583 1.583H3.165a1.583 1.583 0 0 1-1.583-1.583V3.958a1.583 1.583 0 0 1 1.583-1.583h3.959L8.707 4.75h7.125a1.583 1.583 0 0 1 1.583 1.583z"
                stroke="#2563EB"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl text-gray-800 font-medium mt-3 text-center">
            Upload a file
          </h2>
          <p className="text-gray-500/80 mt-1 text-center">
            Attach the file below
          </p>
          <label
            htmlFor="fileInput"
            className="border-2 border-dotted border-gray-400 p-8 mt-6 flex flex-col items-center gap-4 cursor-pointer hover:border-sky-500 transition"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.085 2.583H7.75a2.583 2.583 0 0 0-2.583 2.584v20.666a2.583 2.583 0 0 0 2.583 2.584h15.5a2.583 2.583 0 0 0 2.584-2.584v-15.5m-7.75-7.75 7.75 7.75m-7.75-7.75v7.75h7.75M15.5 23.25V15.5m-3.875 3.875h7.75"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-gray-500">Drag files here to upload</p>
            <p className="text-gray-400">
              Or <span className="text-sky-500 underline">click here</span> to
              select a file
            </p>
            <input
              id="fileInput"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
          {previewUrl && (
            <div className="mt-6">
              <p className="text-gray-600 mb-2">
                File Preview: {selectedFile?.name}
              </p>
              <iframe
                src={previewUrl}
                title="File Preview"
                className="w-full h-64 border border-gray-300 rounded-md"
              />
            </div>
          )}
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              className="px-9 py-2 border border-gray-500/50 bg-white hover:bg-blue-100/30 active:scale-95 transition-all text-gray-500 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-sky-500 hover:bg-sky-600 active:scale-95 transition-all text-white rounded"
              onClick={handleUpload}
            >
              Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatus;
