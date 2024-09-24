// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
// import {
//   Bars3Icon,
//   CalendarIcon,
//   ChartPieIcon,
//   DocumentDuplicateIcon,
//   FolderIcon,
//   HomeIcon,
//   UsersIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
//   { name: 'Statistics', href: '#', icon: UsersIcon, current: false },
//   { name: 'Upload', href: '#', icon: FolderIcon, current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//       <div>
//         <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//           />

//           <div className="fixed inset-0 flex">
//             <DialogPanel
//               transition
//               className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
//             >
//               <TransitionChild>
//                 <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
//                   <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
//                     <span className="sr-only">Close sidebar</span>
//                     <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
//                   </button>
//                 </div>
//               </TransitionChild>
//               {/* Sidebar component, swap this element with another sidebar if you like */}
//               <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
//                 <div className="flex h-16 shrink-0 items-center">
//                   <img
//                     alt="Your Company"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                     className="h-8 w-auto"
//                   />
//                 </div>
//                 <nav className="flex flex-1 flex-col">
//                   <ul role="list" className="flex flex-1 flex-col gap-y-7">
//                     <li>
//                       <ul role="list" className="-mx-2 space-y-1">
//                         {navigation.map((item) => (
//                           <li key={item.name}>
//                             <a
//                               href={item.href}
//                               className={classNames(
//                                 item.current
//                                   ? 'bg-gray-50 text-indigo-600'
//                                   : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
//                                 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
//                               )}
//                             >
//                               <item.icon
//                                 aria-hidden="true"
//                                 className={classNames(
//                                   item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
//                                   'h-6 w-6 shrink-0',
//                                 )}
//                               />
//                               {item.name}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         {/* Static sidebar for desktop */}
//         <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
//           {/* Sidebar component, swap this element with another sidebar if you like */}
//           <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
//             <div className="flex h-16 shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <nav className="flex flex-1 flex-col">
//               <ul role="list" className="flex flex-1 flex-col gap-y-7">
//                 <li>
//                   <ul role="list" className="-mx-2 space-y-1">
//                     {navigation.map((item) => (
//                       <li key={item.name}>
//                         <a
//                           href={item.href}
//                           className={classNames(
//                             item.current
//                               ? 'bg-gray-50 text-indigo-600'
//                               : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
//                             'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
//                           )}
//                         >
//                           <item.icon
//                             aria-hidden="true"
//                             className={classNames(
//                               item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
//                               'h-6 w-6 shrink-0',
//                             )}
//                           />
//                           {item.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>

//                 <li className="-mx-6 mt-auto">
//                   <a
//                     href="#"
//                     className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
//                   >

//                     <span aria-hidden="true">Logout</span>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>

//         <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
//           <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
//             <span className="sr-only">Open sidebar</span>
//             <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//           </button>
//           <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
//           <a href="#">
//             <span className="sr-only">Your profile</span>
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               className="h-8 w-8 rounded-full bg-gray-50"
//             />
//           </a>
//         </div>

//         <main className="lg:pl-72">
//           <div className="xl:pl-96">
//             <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{/* Main area */}</div>
//           </div>
//         </main>

//         <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block w-full">

//         </aside>

//       </div>
//     </>
//       )
//     }

import React from "react";
import { IoAddOutline } from "react-icons/io5";
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
import AddProfile from "./AddProfile";
import CreateSchool from "./CreateSchool";
import ForgotPassword from "./ForgotPassword";
import MonthlyGrowth from "./MonthlyGrowth";
import PersonCard from "./PersonCard";
import SchoolList from "./SchoolList";
import StudentInfo from "./StudentInfo";
import StudentList from "./StudentList";

const Dashboard = () => {
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
 
            <div className="w-full h-full">
      <CreateSchool/>
      <MonthlyGrowth/>
      {/* <ForgotPassword/> */}
    </div>
 
   
  );
};

export default Dashboard;
