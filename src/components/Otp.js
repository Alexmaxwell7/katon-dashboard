import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Otp() {
    const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center mb-4 mt-4">
    <div className="p-2 w-[30%] overflow-hidden rounded-lg bg-[#F0F3F5] shadow m-auto">
      <p className="mt-2 text-sm font-semibold p-12 text-center">
        Please enter the 4 digit code send to +233 (0)21 405 8774 and your
        email
      </p>
      <div>
        <div className="flex justify-between pl-10 pr-10">
          <input
            id="fullname"
            name="text"
            type="text"
            placeholder="5"
            className="block text-2xl font-bold w-12 h-12 border-0  p-4 text-black shadow-sm ring-1 ring-inset ml-2 ring-gray-300 placeholder:text-black placeholder:text-3xl outline-none sm:text-sm sm:leading-6"
          />
          <input
            id="fullname"
            name="text"
            type="text"
            placeholder="5"
            className="block text-2xl font-bold w-12 h-12 border-0  p-4 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black placeholder:text-3xl outline-none sm:text-sm sm:leading-6"
          />
          <input
            id="fullname"
            name="text"
            type="text"
            placeholder="2"
            className="block text-2xl font-bold w-12 h-12 border-0  p-4 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black placeholder:text-3xl outline-none sm:text-sm sm:leading-6"
          />
          <input
            id="fullname"
            name="text"
            type="text"
            placeholder="2"
            className="block text-2xl font-bold w-12 h-12 border-0  p-4 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black placeholder:text-3xl outline-none sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mt-8 mx-auto flex">
        <button className="rounded-full bg-[#006D66] w-32 h-9 mx-auto text-white text-sm" onClick={() => navigate("/reset")}>
          Verify
        </button>
      </div>
    </div>
  </div>
  )
}
