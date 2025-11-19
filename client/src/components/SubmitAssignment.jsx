import React from "react";

export default function SubmitAssignment({ setShowSubmitBox }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h2 className="text-2xl font-semibold mb-4">Submit Assignment</h2>

        <textarea
          placeholder="Your message (optional)"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="file"
          className="w-full mb-4 bg-gray-100 p-2 border rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>

        <button
          onClick={() => setShowSubmitBox(false)}
          className="bg-gray-400 w-full p-3 mt-2 rounded-lg hover:bg-gray-500 transition"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}
