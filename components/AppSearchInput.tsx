"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
interface AppSearchInputProps {
  label?: string;
  value: string;
  classname?: string;
  items: string[];
  placeholder?: string;
  onSelect: (selectedItem: string) => void;
}

const AppSearchInput: React.FC<AppSearchInputProps> = ({
  label,
  items,
  value,
  placeholder,
  classname,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    if (value.length == 0) {
      setFilteredItems([]);
    }
  };

  const handleItemSelect = (item: string) => {
    setSearchTerm(item);
    setFilteredItems([]);
    onSelect(item);
  };

  return (
    <div className="">
      <label
        className="font-semibold text-sm  text-gray-700 mb-2 block"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="text"
        className={twMerge(
          " p-2 w-full border  rounded  border-gray-300  border:transition focus:border-black",
          classname
        )}
        // className="mt-1 p-2 w-full border rounded  border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {filteredItems.length > 0 && (
        <ul className="mt-2 z-20 border rounded border-gray-300 bg-white shadow-lg absolute w-full">
          {filteredItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:bg-black p-2"
              onClick={() => handleItemSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppSearchInput;
