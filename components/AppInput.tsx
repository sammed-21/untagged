import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import requiredImg from "@/assets/svgexport-5.svg";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  // type: "text" | "number" | "email" | "password" | "Date" | "checkbox" | string;
  label: string;
  value?: string | number;
  name: string;
  placeholder?: string;
  checked?: boolean;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  classname?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: FC<InputProps> = ({
  type,
  label,
  classname,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  checked,
}) => {
  return (
    <div className="">
      <div>
        <label
          className="font-semibold text-sm text-gray-700 mb-2 block"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          type={type}
          className={twMerge(
            "text-base font-normal py-2 px-4 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2 transition ease-in",
            classname
          )}
          id={label}
          value={value}
          name={name}
          checked={checked}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
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
    </div>
  );
};

export default AppInput;
