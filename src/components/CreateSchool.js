import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CreateSchool = () => {
    const navigate = useNavigate()
  return (
    <div className="p-2 w-[95%] overflow-hidden rounded-xl  shadow m-auto mt-4 bg-white">
    <div className="flex">
      <div className=" justify-start p-6 w-[50%]">
        <h1 className="text-5xl text-[#12BAB0]">Create</h1>
        <h3 className="text-2xl font-bold mt-2">New School here </h3>
        <p className="text-[#797979] mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className=" justify-end p-6 w-[50%]">
        <div className="border-2 border-dashed p-12 m-5">
          <div className="bg-[#D9D9D9] rounded-full w-24 h-24 mx-auto ">
            <IoAddOutline className=" w-24 h-24 mx-auto text-[#B1B1B1] cursor-pointer" onClick={()=>navigate('/addProfile')}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateSchool