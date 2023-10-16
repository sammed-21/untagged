// import loader from "@/assets/loder.svg";
// import Image from "next/image";
// import React from "react";
// import { twMerge } from "tailwind-merge";

// // function cn(...inputs: ClassValue[]) {

// // }
// interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
//   types: "button" | "submit" | "reset";
//   //   onSubmit: () => void;
//   text: string;
//   classname?: string;
//   loading: boolean;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

//   disabled?: boolean;
// }

// const APPButton = ({
//   text,
//   loading,
//   types,
//   classname,
//   disabled,
//   onClick,
// }: ButtonProps) => {
//   return (
//     <button
//       type={types}
//       disabled
//       onClick={onClick}
//       className={twMerge(
//         `flex gap-2 h-[40px] text-sm justify-center items-center w-full rounded-sm py-1`,
//         disabled
//           ? "text-gray-300 bg-gray-100"
//           : "text-black hover:-translate-y-[2px] hover:ease-linear hover:shadow-md hover:bg-[#daf99] bg-[#c9f270]  ",
//         classname
//       )}
//     >
//       {loading && (
//         <Image src={loader} alt="iamge" className="animate-spin invert" />
//       )}
//       {text}
//     </button>
//   );
// };
// export default APPButton;

import React from "react";
import { twMerge } from "tailwind-merge";
import forwardarrow from "@/assets/forwardarrow.svg"; // Import your forward arrow image
import loader from "@/assets/loder.svg";
import Image from "next/image";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  types: "button" | "submit" | "reset";
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
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        `flex gap-2 h-[40px] text-sm justify-center items-center w-full rounded-sm py-1 relative`,
        disabled
          ? "text-gray-300 bg-gray-100 cursor-not-allowed"
          : "text-black hover:-translate-y-[2px] hover:ease-linear hover:shadow-md hover:bg-[#daf99] bg-[#c9f270] cursor-pointer",
        classname
      )}
    >
      {loading && (
        <Image src={loader} alt="loader" className="animate-spin invert" />
      )}
      {text}
      {!disabled && (
        <span
          className="absolute right-3 top-[50%] transform -translate-y-1/2"
          style={{
            display: loading ? "none" : "block",
          }}
        >
          <Image src={forwardarrow} width={10} height={10} alt="arrow" />
        </span>
      )}
    </button>
  );
};

export default APPButton;
