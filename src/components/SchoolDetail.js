import React from 'react'
import { useNavigate } from 'react-router-dom';

const SchoolDetail = () => {
    const navigate= useNavigate();
    const cardData = [
        {
          logo: "https://www.shutterstock.com/image-vector/book-student-education-logo-design-260nw-1714124848.jpg",
          name: "Teachers",
          quantity: "200",
          description: "Teachers at Accra International",
        },
        {
          logo: "https://i.pinimg.com/originals/5e/c6/98/5ec69816655cdc1cdf38c26eff0bf611.jpg",
          name: "Students",
          quantity: "500,00",
          description: "Students at Accra International",
        },
        {
          logo: "https://img.freepik.com/premium-vector/colorful-family-logo-happy-parents-child-logo-design_115973-4654.jpg",
          name: "Parents",
          quantity: "500,00",
          description: "Parents at Accra International",
        },
      ];
  return (
    <div className="flex">
    <div className=" p-4 w-[65%] overflow-hidden rounded-xl shadow m-auto mt-4 bg-white">
      <div className="mt-12">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg"
          className="w-20 h-20 rounded-full m-auto"
        />
        <h2 className="text-2xl font-bold text-center mt-4">
          Accra Internation School 1
        </h2>
        <div className="flex justify-center mt-2">
          <p className="text-sm text-[#626262] font-semibold text-center">
            Website:
          </p>
          <p className="text-sm text-[#626262] text-center ml-1">
            www.accrainternational.com
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-[#626262] font-semibold text-center">
            Email:
          </p>
          <p className="text-sm text-[#626262] text-center ml-1">
            accrainternational@gmail.com
          </p>
        </div>
        <div className="p-4 w-[85%] overflow-hidden rounded-xl bg-[#F0F3F5] shadow m-auto mt-4">
          <div className="p-5">
            <h4 className="mt-1 text-center text-center font-bold text-sm">
              About the School
            </h4>
            <p className="mt-1 text-[#808181] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <div className="mt-4 mx-auto flex">
          <button className="rounded-full bg-[#006D66] w-28 h-8 mx-auto text-white text-sm">
            Edit
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-[30%] pr-3">
      {cardData.map((data) => (
        <div className=" p-4 overflow-hidden rounded-xl shadow m-auto mt-4 cursor-pointer bg-white" onClick={()=>{data.name==='Teachers' && navigate('/teacher') || data.name ==='Students' && navigate('/student')}}>
          <h4 className="font-bold text-sm text-center">{data.name}</h4>
          <img
            src={data.logo}
            className="w-20 h-20 rounded-full m-auto mt-2"
          />
          {data.name !== "Teachers" && (
            <h1 className="text-3xl font-bold text-center text-[#69A4A0] mt-1">
              {data.quantity}
            </h1>
          )}

          {data.name === "Teachers" ? (
            <div className="w-60 bg-[#3D5A58] rounded-full h-14 m-auto" >
              {" "}
              <h1 className="text-3xl font-bold text-center text-[#69A4A0] mt-3">
                {data.quantity}
              </h1>
              <p className="text-center text-white text-xs my-auto">
                {data.description}
              </p>
            </div>
          ) : (
            <p className="text-center text-xs">{data.description}</p>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default SchoolDetail