import React from "react";

export default function UploadAssignment({ setShowUpload }) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h2 className="text-2xl font-semibold mb-4">
          New Assignment
        </h2>

        <input
          type="text"
          placeholder="Assignment Title"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Description"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Create Assignment
        </button>

        <button
          onClick={() => setShowUpload(false)}
          className="bg-gray-400 w-full p-3 mt-2 rounded-lg hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
