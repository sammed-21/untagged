"use client";
import AppPostButton from "@/components/AppPostButton";
import { postdata } from "@/utils/postdata";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import React, { ChangeEvent } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import heart from "@/assets/heart.svg";
import dots from "@/assets/3dot.svg";
import message from "@/assets/message.svg";
import cross from "@/assets/corss2.svg";
import bell from "@/assets/bell.svg";
import { FaArrowDown, FaSortDown } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { dot } from "node:test/reporters";
import AppTextarea from "@/components/AppTextarea";
import AppInput from "@/components/AppInput";
// import AppInput from "./AppInput";
interface Skill {
  id: number;
  name: string;
}

interface Post {
  id: number;
  name: string;
  university: string;
  graduationYear: number;
  location: string;
  date: string;
  views: number;
  content: string;
  // skills: Skill[];
  linkedin: string;
  email: string;
}

interface PostProps {
  posts: Post[];
}
const postId = ({ params }: { params: { post: number } }) => {
  const selectedPost = postdata.find((post) => post.id === Number(params.post));

  if (!selectedPost) {
    return <div>Post not found</div>;
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };
  return (
    <div className="flex h-screen gap-12 overflow-y-auto w-full ">
      <div className="flex flex-1  bg-white  relative grow flex-shrink-1 basis-[80%] max-xl:basis-full max-xl:flex-shrink max-xl:w-full   min-h-screen justify-start items-start flex-col">
        <Link
          href={"/discover/post"}
          className="sticky top-0 gap-3 text-[#666] bg-white shadow-md mt-0 w-full left-0 h-[4rem] z-50 flex items-center cursor-pointer py-5 px-8"
        >
          {/* <div className="h-16 space-x-3 shadow-md bg-white flex justify-start pl-16 items-center fixed z-50 top-0 "> */}
          <IoChevronBackOutline />
          back
        </Link>
        {/* this is heading back */}
        <div className="rounded-none min-w-max  w-full min-h-screen ">
          <div className="max-w-4xl min-h-full flex gap-3  px-6 py-8 overflow-hidden relative">
            {/* <div className="flex  relative pt-20 px-[80px] h-y-auto   bg-white  gap-5"> */}
            <div className="w-[2.56rem] h-[2.56rem] rounded-full justify-center items-center bg-green-100 ">
              <span className="p-2 font-semibold text-[#25b2aa] flex items-center justify-center">
                SB
              </span>
            </div>
            {/* main content  */}
            <div className=" ">
              {/* <div className=" flex flex-col gap-10"> */}
              <Link
                key={selectedPost.id}
                href={`/discover/post/${selectedPost.id}`}
              >
                <div className="mb-6 flex w-full gap-2 justify-between">
                  <div>
                    <p className="text-xs font-semibold">
                      {selectedPost.name} <span>in</span>{" "}
                      <Link
                        href={"/discover/communities"}
                        className="hover:underline"
                      >
                        {selectedPost.community}
                      </Link>
                    </p>
                    <p className=" font-normal text-xs text-[#666] ">
                      {selectedPost.university}, Class of{" "}
                      {selectedPost.graduationYear}
                      {selectedPost.location} · {selectedPost.date} ·{" "}
                      {selectedPost.views} Views
                    </p>
                  </div>
                  <Image src={dots} width={15} height={15} alt={"image"} />
                </div>
                <p className="text-[#0E0E0E] text-sm leading-6 mb-2 font-normal">
                  {selectedPost.content}
                </p>
              </Link>
              <div className="flex gap-2 ">
                <AppPostButton
                  classname="hover:scale-105 py-2 px-4"
                  icon={heart}
                  label={"Like"}
                />
                <AppPostButton
                  icon={message}
                  classname="hover:scale-105 py-2 px-4"
                  label={"message"}
                />
                <AppPostButton
                  classname="hover:scale-105 py-2 px-4"
                  icon={bell}
                  label={"Follow"}
                />
              </div>
            </div>
          </div>
          {/* comment tag */}
          <div className="sticky bottom-0  w-full py-6 drop-shadow-2xl rounded-e-lg bg-white px-8 z-10">
            <div className=" mb-3 flex justify-between   ">
              <span className=" justify-center gap-2 items-center flex">
                {" "}
                <div className="w-[2.56rem] h-[2.56rem] rounded-full justify-left items-center bg-green-100 ">
                  <span className="p-2 font-semibold text-[#25b2aa] flex items-center justify-center">
                    SB
                  </span>
                </div>{" "}
                <span className="text-md">{selectedPost.name}</span>
              </span>
              <Image
                alt={"cross"}
                width={20}
                height={20}
                className="invert text-gray-500"
                src={cross}
              />
            </div>
            <div className="bg-gray-100 rounded-2xl  h-full">
              <div className="h-28 border-none w-full overflow-y-auto pt-3 pb-5 px-2">
                <input
                  type="text"
                  placeholder="Leave a comment"
                  className="text-black enabled:hover:border-none w-full  border-none focus:border-none placeholder:text-gray-400 bg-transparent "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side trending div */}
      <div className="max-w-sm grow flex-shrink basis-2/6 py-9 px-11 ">
        Tending
      </div>
    </div>
  );
};

export default postId;
