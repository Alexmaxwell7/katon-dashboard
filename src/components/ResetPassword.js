import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center">
    <div className="p-4 w-[35%] overflow-hidden rounded-lg bg-[#F0F3F5] shadow m-auto">
      <p className="mt-2 mb-4 text-sm font-semibold p-12 text-center">
        Your New Password Must Be Different From New Password
      </p>
      <div>
        <div className="space-y-3">
          <input
            id="password"
            name="text"
            type="password"
            placeholder="Password"
            className="block text-sm w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          />
          <input
            id="password"
            name="text"
            type="password"
            placeholder="Confirm Passwors"
            className="block text-sm w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mt-4 mx-auto flex">
        <button className="rounded-full bg-[#006D66] w-32 h-9 mx-auto text-white text-sm" onClick={() => navigate("/")}>
          Save
        </button>
      </div>
    </div>
  </div>
  )
}
