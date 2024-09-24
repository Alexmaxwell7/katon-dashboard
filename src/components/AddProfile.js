import React from 'react'
import { FaPlusSquare } from "react-icons/fa";

const AddProfile = () => {
  return (
    <div className="p-2 w-[95%] overflow-hidden rounded-xl shadow m-auto mt-4 bg-white">
      <div className="mt-12">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg"
          className="w-20 h-20 rounded-full m-auto"
        />
        <div className="mt-3">
          <p className="flex justify-center text-sm text-[#6B6B6B]">
            Add Profile Logo
            <FaPlusSquare className="text-[#006D66] ml-2 mt-1" />
          </p>
        </div>
        <div className='flex justify-center'>
          <div className="mt-3 w-1/3">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#006D66] ml-2"
              >
                Name of School
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Name"
                  className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#006D66] ml-2"
              >
                Email
              </label>
              <div className="mt-2 space-y-5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#006D66] ml-2"
              >
                Website
              </label>
              <div className="mt-2 space-y-5">
                <input
                  id=""
                  name=""
                  type="text"
                  placeholder=""
                  className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-[#006D66] ml-2"
              >
                Add your comment
              </label>
              <div className="mt-2">
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#006D66] ml-2"
              >
                Login Access
              </label>
              <div className="mt-2 space-y-5">
                <input
                  id=""
                  name=""
                  type="text"
                  placeholder=""
                  className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
                />
                <input
                  id=""
                  name=""
                  type="text"
                  placeholder=""
                  className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between mt-14 ">
        <button className="flex justify-start w-16 h-6 text-sm justify-center bg-gray-300 border border-black rounded-full">
          Clear
        </button>
        <button className="flex justify-end  w-16 h-6 text-sm justify-center bg-[#006D66] text-white rounded-full">
          Save
        </button>
      </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddProfile