import loader from "@/assets/loder.svg";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

// function cn(...inputs: ClassValue[]) {

// }
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  types: "button" | "submit" | "reset";
  //   onSubmit: () => void;
  text: string;
  classname?: string;
  loading: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  disabled?: boolean;
}

const APPButton = ({
  text,
  loading,
  types,
  classname,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={types}
      disabled
      onClick={onClick}
      className={twMerge(
        `flex gap-2 h-[40px] text-sm justify-center items-center w-full rounded-sm py-1`,
        disabled
          ? "text-gray-300 bg-gray-100"
          : "text-black hover:-translate-y-[2px] hover:ease-linear hover:shadow-md hover:bg-[#daf99] bg-[#c9f270]  ",
        classname
      )}
    >
      {loading && (
        <Image src={loader} alt="iamge" className="animate-spin invert" />
      )}
      {text}
    </button>
  );
};
export default APPButton;
