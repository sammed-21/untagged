"use client";
import { twMerge } from "tailwind-merge";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you are using Next.js for the Image component
import requiredImg from "@/assets/svgexport-5.svg"; // Path to your required image
import { color } from "framer-motion";

export interface DropdownOption {
  label?: string;
  value?: string | number;
}

export interface DropdownInputProps {
  label: string;
  classname?: string;
  options: DropdownOption[];
  value: string | number;
  name: string;
  placeholder?: string;
  error: boolean;
  disabled?: boolean;
  onChange: (selectedValue: string | number) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  classname = "",
  options,
  value,
  name,
  placeholder = `Select ${label}`,
  error,
  disabled = false,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue); // Propagate the selected value to the parent component
  };

  return (
    <div className={`min-w-full`}>
      <label
        className="font-semibold text-sm text-gray-700 mb-2 block"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className={twMerge(
          " text-base font-normal py-2 px-4 w-60 border  border-gray-300 rounded focus:outline-none focus:border-black focus:border-2 transition ease-in",
          // "text-base font-normal py-2 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2",
          classname
        )}
        id={label}
        name={name}
        value={selectedOption}
        onChange={handleOptionChange}
        disabled={disabled}
      >
        <option value="" className="text-gray-300" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm flex gap-2 flex-start item-center justify-start text-red-500 mt-1">
          <Image
            src={requiredImg}
            width={10}
            height={1}
            className="w-5 bg-red-800 rounded-full"
            alt="required"
          />
          <span>{label} is required</span>
        </p>
      )}
    </div>
  );
};

export default DropdownInput;
