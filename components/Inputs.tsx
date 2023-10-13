// import React from "react";
interface InputsProps {
  title?: string;
  type?: string | number;
  classname?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}
import Image from "next/image";
import requiredImg from "@/assets/svgexport-5.svg";
import { twMerge } from "tailwind-merge";
export const Inputs = ({
  title,
  type,
  placeholder,
  error,
  classname,
  required,
}: InputsProps) => {
  return (
    <div>
      <h2 className="font-semibold  py-3">{title}</h2>

      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        required={required}
        className={twMerge(
          "border - [1px] w-44 border-gray-200 rounded-sm py-3 px-2 ",
          classname
        )}
      />
      {!required && (
        <div>
          <span>
            <Image
              src={requiredImg}
              width={10}
              height={10}
              className="bg-red-800"
              alt="requried"
            />
          </span>
          {title} is requried
        </div>
      )}
    </div>
  );
};
