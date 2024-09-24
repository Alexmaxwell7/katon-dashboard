import React from 'react'
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const navigate = useNavigate();
    const studentData = [
        {
          logo: "https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg",
          name: "Kofi Mochacho",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "John Bechem",
        },
        {
          logo: "https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg",
          name: "Kofi Mochacho",
        },
        {
          logo: "https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg",
          name: "Esther Kabuki",
        },
        {
          logo: "https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg",
          name: "Gloaria Asare",
        },
        {
          logo: "https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg",
          name: "Micheael Osei",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Rosebud",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Stanley",
        },
        {
          logo: "https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg",
          name: "Asamoah Gyan",
        },
      ];
  return (
<div className="p-2 w-[95%] overflow-hidden rounded-xl shadow m-auto mt-4 bg-white">
        <div className="p-6">
          <h4 className="text-sm font-bold">Students</h4>
          <p className="text-sm text-[#C4C4C4]">List of Students</p>
        </div>
        <div className="pl-8 pr-8 p-3 cursor-pointer h-[500px] overflow-y-auto" onClick={()=>navigate('/studentInfo')}>
          {studentData.map((data) => (
            <div className="flex justify-start bg-gray-300 p-2 mb-4 rounded-lg">
              <div className="flex">
                <img
                  src={data.logo}
                  className="w-12 h-12 rounded-full m-auto"
                />
                <p className="m-auto ml-4">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default StudentList