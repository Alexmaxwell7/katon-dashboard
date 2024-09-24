
"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChartPieIcon,
  CloudArrowUpIcon,
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftCircleIcon,
  ChevronLeftIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";


import { useNavigate } from "react-router-dom";


const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Statistics", href: "#", icon: ChartPieIcon, current: false },
  { name: "Upload", href: "#", icon: CloudArrowUpIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardNavbar({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This navigates to the previous page
  };


  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-50 text-indigo-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? "text-indigo-600"
                                    : "text-gray-400 group-hover:text-indigo-600",
                                  "h-6 w-6 shrink-0"
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <ArrowLeftEndOnRectangleIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        />
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-[#f0f3f5] px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center mx-auto">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              
              
            </div>

            <button
        type="button"
        className="rounded-2xl w-[160px] mx-auto bg-white  px-3.5 py-2.5 text-sm font-semibold text-gray-500 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        ADMIN
      </button>
           
            <nav className="flex flex-1 flex-col mt-20">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#13baaf] text-white"
                              : "text-gray-500 hover:bg-[#13baaf] hover:text-white",
                            "group flex gap-x-3 rounded-3xl p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <ArrowLeftEndOnRectangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    />
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72 bg-[#f0f3f5]">
          <div className="sticky top-0 z-40">
            <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Separator */}
              <div
                aria-hidden="true"
                className="h-6 w-px bg-gray-200 lg:hidden"
              />

              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 bg-[#f0f3f5]">
                <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                  <div className="flex w-1/2">
                  <div className=" w-1/4 px-4">

                  <div className="h-6 w-6 text-gray-500 bg-white rounded-3xl mt-2" onClick={handleBackClick}>
                  <ChevronLeftIcon className="text-black" />
                  </div>
                  
                 

                  </div>
                  <div className="w-3/4 justify-end flex">
                     <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-[80%]">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search here..."
                        className="block w-full rounded-2xl border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 border-red-600"
                      />
                    </div>
                  </div>
                    {/* <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-[80%]">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search here..."
                        className="block w-full rounded-2xl border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 border-red-600"
                      />
                    </div> */}
                  </div>
                  <div className="w-1/2 flex justify-end">
                    {/* <p className='px-5'>My Name is Maxwell</p> */}
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />

                    <p className="px-5"> Maxwell</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
