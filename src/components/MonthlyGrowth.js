import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
const MonthlyGrowth = () => {
    const navigate = useNavigate()
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className="flex">
    <div className=" p-4 w-[65%] overflow-hidden rounded-xl shadow m-auto mt-4 bg-white">
      <h4 className="text-base font-semibold p-4">Monthly growth</h4>
      <div className="flex">
        <p className="font-semibold pl-4 text-lg">154</p>
        <p className="text-lg ml-3 text-[#B1B1B1]"> Schools</p>
      </div>
      <div className="mt-4 rounded-lg">
        <BarChart
          width={700}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="uv"
            fill="gray"
            activeBar={<Rectangle fill="#12BAB0" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>

    <div className=" justify-end p-4 w-[27%] overflow-hidden rounded-xl bg-[#12BAB0] shadow m-auto  mt-4 cursor-pointer "  onClick={()=>navigate('/schoolInfo')}>
      <div className="flex">
        <img
          src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg"
          className="rounded-full w-16 h-16 p-2"
        />{" "}
        <img
          src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg"
          className="rounded-full w-16 h-16 p-2"
        />{" "}
        <img
          src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg"
          className="rounded-full w-16 h-16 p-2 mr-4"
        />{" "}
      </div>
      <div className="mt-36 p-4">
        <h2 className="text-2xl font-bold text-white">Schools</h2>
        <div className="flex justify-between">
          <p className="flex justify-start text-xs font-semibold text-[#048078]">
            Total number of Schools
          </p>
          <p className="flex justify-end text-xs font-semibold text-[#048078]">
            500
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MonthlyGrowth