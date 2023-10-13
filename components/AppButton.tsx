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
  disabled?: boolean;
}

const APPButton = ({
  text,
  loading,
  types,
  classname,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={types}
      disabled
      className={twMerge(
        `flex {${disabled} ? text-gray-500: text-black } gap-2 justify-center items-center w-full border-[1px] border-black rounded-sm py-1`,
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
// }

// const APPButton = ({ text, loading, types, classname }: ButtonProps) => {
//   return (
//     <button
//       type={types}
//       className={twMerge(
//         "flex gap-2 justify-center items-center w-full border-[1px] border-black rounded-sm py-1",
//         classname
//       )}
//     >
//       {/* {loading && ( * /\
//       \
//       p[;'./12qA  1 dfghbnm\-]
//       <Image src={loader} alt="iamge" className="animate-spin" />
//       {/* )} */}
//       {text}
//     </button>
//   );
// };
// export default APPButton;
