import React from 'react'

const StudentInfo = () => {
  return (
    <div className="p-2 w-[95%] overflow-hidden rounded-xl shadow m-auto mt-4 bg-white">
    <div className="mt-2 p-7">
      <h5 className="font-bold text-sm ">Students</h5>
      <p className="text-sm text-[#C4C4C4]">About Student</p>
    </div>
    <div className="mt-3">
      <img
        src="https://logowik.com/content/uploads/images/student5651.jpg"
        className="w-16 h-16 rounded-full m-auto"
      />
    </div>
    <div className='flex justify-center mb-10'>
    <div className="mt-3 space-y-3 w-1/3">
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6  ml-2"
        >
          Full Name
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Kofi Mochacho"
            className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6  ml-2"
        >
          Username
        </label>
        <div className="mt-2 space-y-5">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Mocha"
            className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6  ml-2"
        >
          Email
        </label>
        <div className="mt-2 space-y-5">
          <input
            id=""
            name=""
            type="email"
            placeholder="Kofi@gmail.com"
            className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6  ml-2"
        >
          Phone Number
        </label>
        <div className="mt-2 space-y-5">
          <input
            id=""
            name=""
            type="number"
            placeholder="+ 233 505 324v 7891"
            className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6  ml-2"
        >
          Password
        </label>
        <div className="mt-2 space-y-5">
          <input
            id=""
            name=""
            type="password"
            placeholder="Kofi_me1"
            className="block w-full rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 rounded-lg"
          />
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default StudentInfo