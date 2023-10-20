// "use client";
// import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

// interface DateInputProps {
//   label: string;
//   value: string;
//   type: HTMLInputTypeAttribute;
//   name: string;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   classname?: string;
//   placeholder?: string;
//   error?: boolean;
// }

// const DateInput: React.FC<DateInputProps> = ({
//   label,
//   value,
//   name,
//   onChange,
//   classname,
//   placeholder,
//   error,
// }) => {
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     let input = e.target.value;

//     // Remove non-numeric characters using regex
//     input = input.replace(/\D/g, "");

//     // Add a slash after the first two characters
//     if (input.length > 2) {
//       input = input.substring(0, 2) + "/" + input.substring(2);
//     }

//     // Call the onChange handler with the updated input value
//     // onChange(name, input);
//   };

//   return (
//     <div className="">
//       <label
//         className="font-semibold text-sm text-gray-700 mb-2 block"
//         htmlFor={label}
//       >
//         {label}
//       </label>
//       <input
//         type="text"
//         className={twMerge(
//           "text-base font-normal py-2 px-4 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2",
//           classname
//         )}
//         value={value}
//         name={name}
//         onChange={handleInputChange}
//         placeholder={placeholder}
//       />
//     {error && (
//         <p className="text-sm flex gap-2 flex-start item-center justify-start text-red-500 mt-1">
//           <Image
//             src={requiredImg}
//             width={10}
//             height={1}
//             className="w-5 bg-red-800 rounded-full"
//             alt="required"
//           />
//           <span>{label} is required</span>
//         </p>
// )}
//     </div>
//   );
// };
// export default DateInput;

// import React, {
//   ChangeEvent,
//   HTMLInputTypeAttribute,
//   HtmlHTMLAttributes,
// } from "react";
// import { twMerge } from "tailwind-merge";
// import Image from "next/image";
// import requiredImg from "@/assets/svgexport-5.svg";

// interface DateInputProps {
//   label: string;
//   value: string;
//   type: HTMLInputTypeAttribute;
//   name?: string;
//   error?: boolean;
//   classname?: string;
//   onChange: (formattedInput: string) => void;
//   placeholder: string;
// }

// const DateInput: React.FC<DateInputProps> = ({
//   label,
//   value,
//   onChange,
//   placeholder,
//   error,
//   classname,
//   type,
//   name,
// }) => {
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     let input = e.target.value;
//     // Remove non-numeric characters using regex
//     input = input.replace(/\D/g, "");

//     // Format input as MM/YYYY
//     if (input.length > 2) {
//       input = input.substring(0, 2) + "/" + input.substring(2, 6);
//     }

//     // Call the onChange handler with the updated input value
//     onChange(input);
//   };

//   return (
//     <div className="mb-4">
//       <label className="font-semibold text-sm text-gray-700 mb-2 block">
//         {label}
//       </label>
//       <input
//         type={type}
//         className={twMerge(
//           "text-base font-normal py-2 px-4 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2 transition ease-in",
//           classname
//         )}
//         value={value}
//         name={name}
//         onChange={handleInputChange}
//         placeholder={placeholder}
//       />
//       {error && (
//         <p className="text-sm flex gap-2 flex-start item-center justify-start text-red-500 mt-1">
//           <Image
//             src={requiredImg}
//             width={10}
//             height={1}
//             className="w-5 bg-red-800 rounded-full"
//             alt="required"
//           />
//           <span>{label} is required</span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default DateInput;
import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import requiredImg from "@/assets/svgexport-5.svg";

interface DateInputProps {
  label: string;
  value: string;
  name: string;
  type: HTMLInputTypeAttribute;
  error?: boolean;
  classname?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  type,
  onChange,
  placeholder,
  error,
  classname,
  name,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    // Remove non-numeric characters using regex
    input = input.replace(/\D/g, "");

    // Format input as MM/YYYY
    if (input.length > 2) {
      input = input.substring(0, 2) + "/" + input.substring(2, 6);
    }

    // Call the parent component's onChange handler with the updated input value
    // Pass the event object with the correct 'name' property
    onChange({
      ...e,
      target: {
        ...e.target,
        name: name, // Ensure the correct 'name' property is set in the event object
        value: input,
      },
    });
  };

  return (
    <div className="">
      <label className="font-semibold text-sm text-gray-700 mb-2 block">
        {label}
      </label>
      <input
        type={type}
        className={twMerge(
          "text-base font-normal py-1  px-4 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2 transition ease-in",
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
            alt="required"
          />
          <span>{label} is required</span>
        </p>
      )}
    </div>
  );
};

export default DateInput;
