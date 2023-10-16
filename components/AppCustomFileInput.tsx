import React, { ChangeEvent, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface CustomFileInputProps {
  label: string;
  classname: string;
  onFileSelect: (file: File) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  label,
  classname,
  onFileSelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={twMerge("", classname)}>
      <label
        className="font-semibold text-sm text-gray-700 mb-2 block"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="flex flex-col text-sm items-center justify-center w-full h-40 border-[1px] border-gray-300 rounded-lg">
        <input
          ref={fileInputRef}
          type="file"
          className={twMerge("hidden", classname)}
          onChange={handleInputChange}
          accept=".pdf,.doc,.docx"
        />
        <p className="text-gray-500 mb-2">
          Drag and drop your resume or
          <span
            className="text-blue-700 text-sm hover:bg-blue-700 font-semibold py-2 px-1 rounded"
            onClick={handleBrowseClick}
          >
            Browse
          </span>
        </p>
      </div>
    </div>
  );
};

export default CustomFileInput;
