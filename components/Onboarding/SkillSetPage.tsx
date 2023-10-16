import React, { ChangeEvent, FormEvent, useState } from "react";
import AppInput from "../AppInput";
import APPButton from "../AppButton";
import downarrow from "@/assets/downarrow.svg";
import graysearch from "@/assets/graysearch.svg";
import forwardarrow from "@/assets/forwardarrow.svg";
import Image from "next/image";
import DropdownInput from "../AppDropDown";
import { DropdownOption } from "@/components/AppDropDown";
import DateInput from "../AppData";
import AppSearchInput from "../AppSearchInput";
import AppCustomFileInput from "../AppCustomFileInput";

export const dummyItems: string[] = [
  "Item 1",
  "Item 2",
  "Another Item",
  "More Items",
  "Sample Item",
  "Test Item",
  // Add more items as needed
];
const dropdownOptions: DropdownOption[] = [
  { label: "Internship", value: "internship" },
  { label: "Entry Level", value: "entrylevel" },
  { label: "Mid-Senior", value: "midsenior" },
  { label: "Management", value: "management" },
  { label: "Director", value: "director" },
  { label: "Executive Leader", value: "executiveleader" },
];
const SkillSetPage: React.FC = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>(""); // State to manage selected item in sidebar
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [endDate, setIsEndDate] = useState(false); // State for checkbox
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  };
  const handleCehcboxEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsEndDate(e.target.checked);
  };

  // Define radio button options based on the selected item

  // Handler to change the selected item in the sidebar

  const [name, setName] = useState({
    company: "",
    joblevel: "",
    startdate: "",
    jobtitle: "",
    jobtype: "",
    enddate: "",
  });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  //this is option for the dropdown inputfield
  const [selectedOption, setSelectedOption] = useState<string | number>("");

  const handleDropdownChange = (selectedValue: string | number) => {
    console.log(selectedValue);
    setSelectedOption(selectedValue);
    // Do something with the selected value, if needed
  };
  //htis search input handlechange
  const handleSelectSearch = (selectedItem: string) => {
    // Do something with the selected item
    setSelectedItem(selectedItem);
    console.log(`Selected item: ${selectedItem}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setName((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAnyEmpty = Object.values(name).some((value) => value === "");
    setLoader(true);
    if (isAnyEmpty) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const HanldeCheckbox = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  React.useEffect(() => {
    if (
      name.company.length > 0 &&
      name.joblevel.length > 0 &&
      name.jobtitle.length > 0 &&
      name.jobtype.length > 0 &&
      name.startdate.length > 0 &&
      name.enddate.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name]);
  const handleFileSelect = (file: File) => {
    // Handle the selected file here
    console.log("Selected file:", file);
  };
  return (
    <div className="relative w-fullcontainer border-none">
      <div className=" flex flex-col my-5    items-center w-full justify-center max-md:px-5">
        <h1 className="text-4xl  font-serif    font-normal">Skill set</h1>

        <p className="text-gray-900 text-center mt-[1rem]">
          Recruiters can search through profiles based off of certain skills
          needed for a role, so be sure to represent your full abilities here{" "}
        </p>
      </div>

      <div className="flex w-full justify-center items-center px-5 ">
        <form onSubmit={handleSubmit} className="w-full flex ">
          <section className=" flex flex-col justify-center items-start  w-full p-15">
            {/* <div className={` flex w-full    justify-center gap-7 mb-14`}> */}

            <div className="border-[1px]  border-gray-100">
              <div className="relative max-w-92">
                <p className="font-semibold text-sm text-gray-700 mb-2 block">
                  Areas of expertise
                </p>
                <p className="text-sm text-gray-500">
                  What areas do you have the most expertise with? (Choose up to
                  4)
                </p>
                <span
                  className="absolute left-3"
                  style={{
                    top: `calc(75% - 0px)`, // 10px is half of the image height (20px / 2)
                  }}
                >
                  <Image src={graysearch} width={18} height={18} alt="image" />
                </span>
                <AppSearchInput
                  label=""
                  placeholder="Company"
                  value={selectedItem}
                  classname="w-[330px] placeholder:px-8 rounded-full h-[46px] "
                  items={dummyItems}
                  onSelect={handleSelectSearch}
                />
              </div>
              <AppCustomFileInput
                label="Resume (opt)"
                classname="mt-5"
                onFileSelect={handleFileSelect}
                // type="file"
                // label="Add your Linkdin URL"
                // value={name.startdate}
                // name="startdate"
                // classname="w-full h-28 items-center "
                // error={error}
                // onChange={handleInputChange}
                // placeholder="Drag and drop your resume or browse"
              />
            </div>

            <div className="flex w-full items-center justify-center mt-3 mb-11">
              <span className="relative">
                <span
                  className="absolute right-3"
                  style={{
                    top: `calc(35% - 0px)`, // 10px is half of the image height (20px / 2)
                  }}
                >
                  <Image
                    src={forwardarrow}
                    width={10}
                    height={10}
                    alt="image"
                  />
                </span>

                <APPButton
                  types="button"
                  // disabled={buttonDisabled}
                  aria-label="submit signup-form form"
                  text="Save & continue"
                  loading={loader}
                  classname="w-44   border-gray-300 font-semibold"
                />
              </span>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SkillSetPage;
// postcss.config.js
