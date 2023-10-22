"use client";
import Link from "next/link";
import React from "react";
import { postdata } from "@/utils/postdata";
import PostComponent from "@/components/PostComponent";
import Image from "next/image";
import Search from "@/assets/graysearch.svg";
import AppSearchInput from "@/components/AppSearchInput";

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

const PostList: React.FC<PostProps> = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };
  return (
    <div className="flex  ">
      <div className="lg:p-28 first-letter: ">
        <div className="pb-[45px]">
          <h1 className="text-4xl font-semibold font-sans">All Posts</h1>
          <p className="text-xs pt-2">723,604 | 606 online </p>
        </div>
        <div className="flex w-[65%] gap-5">
          <div className="min-w-full space-y-[16px]">
            <div className="sticky top-12">
              <span className=" relative">
                <span
                  className="absolute left-3"
                  style={{
                    top: `calc(50% - 10px)`, // 10px is half of the image height (20px / 2)
                  }}
                >
                  <Image src={Search} width={18} height={18} alt="image" />
                </span>
                <AppSearchInput
                  label=""
                  placeholder="Company"
                  classname=" w-3/4 placeholder:px-5 border-none shadow-md  rounded-full pl-4  h-[46px]"
                  onSelect={function (selectedItem: string): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </span>
            </div>
            <div className="flex  flex-col gap-10  items-center justify-center ">
              {postdata.map((postData, index) => (
                // <Link key={postData.id} href={`/discover/post/${postData.id}`}>
                //   <PostComponent post={postData} />
                // </Link>
                <li key={index} className=" list-none">
                  <PostComponent post={postData} />
                </li>
              ))}
            </div>
          </div>
          <div className="min-w-[300px] p-3 h-[77px] bg-white">Tending</div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
