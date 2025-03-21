"use client";
import React from "react";

export default function UpdateProfile() {
  return (
    <form action="" className="bg-white py-8 text-lg flex gap-6 flex-col p-6 rounded-lg shadow-md">
      <div className="space-y-2">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="px-5 py-3 bg-gray-200 text-gray-800 w-full shadow-sm rounded-sm
          disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          disabled
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          className="px-5 py-3 bg-gray-200 text-gray-800 w-full shadow-sm rounded-sm
          disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          disabled
        />
      </div>

      
      <div className="space-y-2">
        <label htmlFor="nationalID">National ID Number</label>
        <input
          type="text"
          id="nationalID"
          className="px-5 py-3 bg-gray-200 text-gray-800 w-full shadow-sm rounded-sm"
          disabled
          name="nationalID"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button
          className="bg-blue-500 px-8 py-4 text-white font-semibold rounded-md
          hover:bg-blue-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}
