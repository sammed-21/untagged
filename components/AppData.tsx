"use client";
import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import requiredImg from "@/assets/svgexport-5.svg";
interface DateInputProps {
  type: HTMLInputTypeAttribute;
  label?: string;
  value: string;
  classname?: string;
  placeholder?: string;
  error?: boolean;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  name,
  onChange,
  classname,
  placeholder,
  error,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove non-numeric characters using regex
    input = input.replace(/\D/g, "");

    // Add a slash after the first two characters
    if (input.length > 2) {
      input = input.substring(0, 2) + "/" + input.substring(2);
    }

    // Update state with the formatted input
    onChange({ ...e, target: { ...e.target, value: input } });
  };
  return (
    <div className="">
      <label
        className="font-semibold text-sm text-gray-700 mb-2 block"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="text"
        className={twMerge(
          "text-base font-normal py-2 px-4 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2",
          classname
        )}
        value={value}
        name={name}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-sm flex gap-2 flex-start item-center justify-start text-red-500 mt-1">
          <Image
            src={requiredImg}
            width={10}
            height={1}
            className="w-5 bg-red-800 rounded-full"
            alt="requried"
          />
          <span>{label} is required</span>
        </p>
      )}
    </div>
  );
};

export default DateInput;
