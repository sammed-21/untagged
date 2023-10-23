"use client";
import React, { useContext, useState } from "react";
import lock from "@/assets/lock.svg";
import company from "@/assets/company.svg";
import events from "@/assets/event.svg";
import job from "@/assets/job.svg";
import homeimg from "@/assets/homeimg.svg";
import settings from "@/assets/settings.svg";
import remoteworks from "@/assets/removework.png";
import mice from "@/assets/mice.png";
import generaladvice from "@/assets/general-advice.png";
import logoimage from "@/assets/logoimg.png";
import community from "@/assets/Community.svg";
import logo from "@/assets/brand-logo-combined.svg";
import Link from "next/link";
import Image from "next/image";
import bell from "@/assets/bell.svg";
import Search from "@/assets/searchgray.svg";

import { useSelectedLayoutSegment } from "next/navigation";
import AppSearchInput from "./AppSearchInput";
import { MenuContext } from "@/context/MenuContext";
export const dummyItems: string[] = [
  "Team @ Untapped",
  "Item 2",
  "Another Item",
  "More Items",
  "Sample Item",
  "Test Item",
  // Add more items as needed
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Sidebar = () => {
  const { open } = useContext(MenuContext);
  const segment = useSelectedLayoutSegment();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const sidebarOptions = [
    {
      name: "Home",
      href: "/discover",
      icon: homeimg,
      current: !segment ? true : false,
    },
    {
      name: "Jobs",
      href: "/discover/jobs",
      icon: job,
      current: `/${segment}` == "/jobs" ? true : false,
    },
    {
      name: "Events",
      href: "/discover/events",
      icon: events,
      current: `/${segment}` == "/events" ? true : false,
    },
    {
      name: "Companies",
      href: "/discover/companies",
      icon: company,
      current: `/${segment}` == "/companies" ? true : false,
    },
    {
      name: "Sammed",
      href: "/discover/me",
      icon: homeimg,
      current: `/${segment}` == "/me" ? true : false,
    },
    // {
    //   name: "All Posts",
    //   href: "/discover/jobs",
    //   icon: generaladvice,
    //   current: `/${segment}` == "/communities" ? true : false,
    // },
  ];
  const sidebarCommunity = [
    {
      name: "All Post",
      href: "/discover/post",
      icon: community,

      current: `/${segment}` == "/communities" ? true : false,
    },
    {
      name: "General Post",
      href: "/discover/communities/:id",
      icon: generaladvice,
      // current: `/${segment}` == "/communities/:id" ? true : false,
    },
    {
      name: "Recruiter Announcements",
      href: "/discover/communities/:id",
      icon: mice,
      // current: `/${segment}` == "/communities" ? true : false,
    },
    {
      name: "Remote Work",
      href: "/discover/communitie/:id",
      icon: remoteworks,
      // current: `/${segment}` == "/companies" ? true : false,
    },

    // {
    //   name: "All Posts",
    //   href: "/discover/jobs",
    //   icon: generaladvice,
    //   current: `/${segment}` == "/communities" ? true : false,
    // },
  ];
  // console.log(open);
  const handleSelectSearch = (selectedItem: string) => {
    // Do something with the selected item
    setSelectedItem(selectedItem);
    console.log(`Selected item: ${selectedItem}`);
  };

  return (
    // <div className="overflow-x-auto overflow-y-auto h-full pt-[0.75px] px-0 pb-[6.26rem]">
    //   <div
    //     className={`${
    //       open ? "flex fixed left-0 " : "hidden"
    //     } transation ease-linear delay-300  relative flex-none lg:fixed lg:inset-y-0 lg:flex h-screen lg:w-[280px] lg:flex-col `}
    //   >
    //     {/* <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2"> */}
    //     <div className="flex grow flex-col min-h-screen    pb-4 border-r-2 scrollbar-hide  ">
    //       <div className="flex sticky left-0 h-[64px] bg-white top-0 px-4 justify-between border-b-[1px] border-gray-200  shrink-0 items-center">
    // <Image src={logo} width={100} height={45} alt="logo" className="" />
    // <span className="flex space-x-3">
    //   <Link href={"/discover/settings"}>
    //     <Image
    //       src={settings}
    //       width={18}
    //       height={18}
    //       alt="settings"
    //       className="text-3xl font-bold"
    //     />
    //   </Link>
    //   <Image
    //     src={bell}
    //     width={18}
    //     height={18}
    //     alt="settings"
    //     className="text-3xl font-bold"
    //   />
    // </span>
    //       </div>
    //       <nav className="flex flex-1 flex-col h-screen overflow-y-auto scrollbar-hide">
    //         <ul role="list" className="flex flex-1 bg-white flex-col gap-y-9">
    //           {/* <li className={` ${open ? "lg:block" : "hidden"}  `}> */}
    //           <li className="hidden  lg:block">
    //             <ul role="list" className=" space-y-1">
    // {sidebarOptions.map((option) => (
    //   <li
    //     key={option.name}
    //     className={classNames(
    //       option.current ? "border-l-2 border-black" : ""
    //     )}
    //   >
    //     <Link
    //       className={classNames(
    //         option.current
    //           ? "bg-gray-200 "
    //           : // ? "bg-gray-200 border-l-4 text  border-black"
    //             "",
    //         "group flex px-7 gap-x-4 rounded-md p-2 text-sm leading-8 font-normal"
    //       )}
    //       href={option.href}
    //     >
    //       <Image
    //         src={option.icon}
    //         width={20}
    //         height={16}
    //         alt={option.name}
    //       />
    //       {option.name}
    //     </Link>
    //   </li>
    // ))}
    //             </ul>
    //             <ul>
    //               <h1 className="font-light leading-8 px-3 pt-6 pb-3">
    //                 DIRECT MESSAGES
    //               </h1>
    //               <span className="relative">
    //                 <span
    //                   className="absolute left-5"
    //                   style={{
    //                     top: `calc(30% - 0px)`, // 10px is half of the image height (20px / 2)
    //                   }}
    //                 >
    //                   <Image
    //                     src={Search}
    //                     className="filter-gray"
    //                     width={15}
    //                     height={15}
    //                     alt="image"
    //                   />
    //                 </span>
    //                 <AppSearchInput
    //                   label=""
    //                   placeholder="Company"
    //                   value={selectedItem}
    //                   // error={error}
    //                   classname=" w-11/12 pl-10 border-gray-200 mx-3 items-center rounded-full h-[38px]"
    //                   items={dummyItems}
    //                   onSelect={handleSelectSearch}
    //                 />
    //               </span>
    //               <span className="flex justify-start  space-x-2 px-2 py-3">
    //                 <Image
    //                   src={logoimage}
    //                   className="filter-gray"
    //                   width={23}
    //                   height={18}
    //                   alt="image"
    //                 />
    //                 <p className="font-medium">Team @ untapped</p>
    //               </span>
    //             </ul>
    //           </li>

    //           <ul role="list" className="-mx-2 space-y-1">
    //             {sidebarCommunity.map((option) => (
    //               <li
    //                 key={option.name}
    //                 className={classNames(
    //                   option.current ? "border-l-4 border-black " : ""
    //                 )}
    //               >
    //                 <Link
    //                   className={classNames(
    //                     option.current
    //                       ? "bg-gray-200 "
    //                       : // ? "bg-gray-200 border-l-4 text  border-black"
    //                         "",
    //                     "group flex px-6 gap-x-4 rounded-e-md p-2 text-sm leading-8 font-normal"
    //                   )}
    //                   href={option.href}
    //                 >
    //                   <Image
    //                     src={option.icon}
    //                     width={28}
    //                     height={18}
    //                     alt={option.name}
    //                   />
    //                   {option.name}
    //                 </Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
    <div
      className="fixed
       z-30
        top-0
         bottom-0 

         w-[17.5rem]
         flex 
    flex-col
    h-full
    shadow-2xl
    bg-white"
    >
      <header
        className="pt-[1.5rem] 
      px-[1.25rem] pb-0 "
      >
        <div className="justify-between items-center flex">
          <Image
            src={logo}
            width={100}
            height={45}
            alt="logo"
            className="w-[6.25rem]"
          />
          <span className="flex items-center ">
            <Link href={"/discover/settings"}>
              <Image
                src={settings}
                width={18}
                height={18}
                alt="settings"
                className="text-3xl max-h-4  mr-5 font-bold"
              />
            </Link>
            <Image
              src={bell}
              width={18}
              height={18}
              alt="settings"
              className="text-3xl max-h-4    font-bold"
            />
          </span>
        </div>
        <hr className="border-b border-[1px] border-[#f2f2f2] mt-3 mb-0 mx-0" />
      </header>
      <div className=" overflow-y-auto overflow-x-hidden h-full  pt-[0.75px] px-0 pb-[6.26rem]">
        <div className="mt-3">
          {sidebarOptions.map((option) => (
            // <span
            //   className={classNames(
            //     option.current ? "border-l-2 bg-gray-100 border-black" : "",
            //     "relative min-w-[17.5rem] min-h-[3rem] py-0 px-6 text-[#0e0e0e] items-center flex list-none"
            //   )}
            // >
            <li
              key={option.name}
              // className={classNames(
              //   option.current ? "border-l-2 border-black" : "",
              //   "text-red-800"
              // )}
              className={classNames(
                option.current
                  ? "border-l-4 rounded-sm bg-gray-100 border-black"
                  : "",
                "relative min-w-[17.5rem] min-h-[3rem] py-0 px-6 text-[#0e0e0e] items-center flex list-none"
              )}
            >
              <Link
                className={classNames(
                  option.current
                    ? "bg-gray-100 items-center"
                    : // ? "bg-gray-200 border-l-4 text  border-black"
                      "",
                  "group text-sm flex items-center font-normal leading-[130%] "
                )}
                href={option.href}
              >
                <Image
                  src={option.icon}
                  width={20}
                  className="w-6 h-6 mr-4 ml-1"
                  height={16}
                  alt={option.name}
                />
                {option.name}
              </Link>
            </li>
            // </span>
          ))}
        </div>
        <div>
          <div className="pt-8 px-6 pb-3 uppercase tracking-wider justify-between items-center flex">
            <h3 className="text-[#0e0e0e] text-xs leading-[150%] font-normal">
              Direct Messages
            </h3>
            <div>
              <AppSearchLeftInput
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
