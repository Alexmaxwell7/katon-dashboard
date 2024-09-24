import React from 'react'
import { useNavigate } from 'react-router-dom';

const SchoolList = () => {
    const navigate = useNavigate();
    const schoolData = [
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Accra International School 1",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 2",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 3",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 4",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 5",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Accra International School 6",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Accra International School 7",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 8",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 9",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 10",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Accra International School 11",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 12",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 13",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 14",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 15",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 16",
        },
        {
          logo: "https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg",
          name: "Accra International School 17",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 18",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 19",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 20",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 21",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 22",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 23",
        },
        {
          logo: "https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg",
          name: "Accra International School 24",
        },
      ];
   
  return (
    <div className="p-2 w-[95%] overflow-hidden rounded-xl shadow m-auto mt-4 bg-white">
    <div className="p-5">
      <h5 className="font-bold text-sm">School</h5>
      <p className="text-sm text-[#797979]">
        Lorem ipsum dolar sit amet consectetur
      </p>
    </div>
    <div className="pl-8 pr-8 p-3 h-[600px] overflow-y-auto">
      {schoolData.map((data) => (
        <div className="flex justify-start bg-gray-300 p-2 mb-4 rounded-lg cursor-pointer"  onClick={()=>navigate('/schoolDetail')}>
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

export default SchoolList