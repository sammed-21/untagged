import React, { ChangeEvent, FormEvent, useState } from "react";
import AppInput from "../AppInput";
import APPButton from "../AppButton";
import downarrow from "@/assets/downarrow.svg";
import Search from "@/assets/Search.svg";
import Image from "next/image";
const WorkExperience: React.FC = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>(""); // State to manage selected item in sidebar

  // Define radio button options based on the selected item

  // Handler to change the selected item in the sidebar

  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

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

  React.useEffect(() => {
    if (
      name.firstname.length > 0 &&
      name.lastname.length > 0 &&
      name.email.length > 0 &&
      name.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name]);

  return (
    <div className="w-full">
      <div className=" flex flex-col  my-5 items-center w-full justify-center">
        <h1 className="text-4xl  font-serif    font-normal">
          Recent work experience
        </h1>

        <p className="text-gray-600 mt-[1rem]">
          You can add additional work experience to your profile later
        </p>
      </div>

      <div className="flex w-full justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-full flex ">
          <section className=" flex flex-col justify-center items-start  w-full p-15">
            <div className="flex justify-start items-center px-[9%] w-full">
              <AppInput
                type="checkbox"
                error={false}
                name="checkbox "
                value={""}
                classname=" w-10   "
                label=""
                onChange={handleInputChange}
              />
              <span className="mt-6">I'm looking for my first job</span>
            </div>
            <div className="flex w-full justify-center gap-4 mb-14">
              <div>
                {/* <AppInput
                  type="text"
                  label="Current / Most Recent Employe"
                  value={name.firstname}
                  name="firstname"
                  classname="w-[400px]"
                  error={error}
                  onChange={handleInputChange}
                  placeholder=""
                /> */}
                {/* <span className="relative">
                  <span>
                    <Image
                      src={Search}
                      width={20}
                      height={20}
                      className="absolute  right-3"
                      alt="image"
                    />
                  </span>

                  <AppInput
                    type="text"
                    label="Job Level"
                    value={name.firstname}
                    name="firstname"
                    classname="w-[400px]"
                    error={error}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </span> */}
                <span className="relative">
                  <span
                    className="absolute right-3"
                    style={{
                      top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                    }}
                  >
                    <Image src={Search} width={18} height={18} alt="image" />
                  </span>

                  <AppInput
                    type="text"
                    label="Job Level"
                    value={name.firstname}
                    name="firstname"
                    classname="w-[400px]  h-[46px]"
                    error={error}
                    onChange={handleInputChange}
                    placeholder="Company"
                  />
                </span>
                <span className="relative">
                  <span
                    className="absolute right-3"
                    style={{
                      top: `calc(70% - 00px)`, // 10px is half of the image height (20px / 2)
                    }}
                  >
                    <Image
                      src={downarrow}
                      className="text-gray-200"
                      width={14}
                      height={14}
                      alt="image"
                    />
                  </span>

                  <AppInput
                    type="text"
                    label="Job Level"
                    value={name.firstname}
                    name="firstname"
                    classname="w-[400px]  h-[46px]"
                    error={error}
                    onChange={handleInputChange}
                    placeholder="Select"
                  />
                </span>

                <AppInput
                  type="date"
                  label="Start date"
                  value={name.firstname}
                  name="firstname"
                  classname="w-[400px] h-[46px]"
                  error={error}
                  onChange={handleInputChange}
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="">
                <AppInput
                  type="text"
                  label="Job Title"
                  value={name.firstname}
                  name="firstname"
                  classname="w-[400px]  h-[46px]"
                  error={error}
                  onChange={handleInputChange}
                  placeholder="Job title"
                />
                <span className="relative">
                  <span
                    className="absolute right-3"
                    style={{
                      top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                    }}
                  >
                    <Image src={Search} width={18} height={18} alt="image" />
                  </span>

                  <AppInput
                    type="text"
                    label="Job Type"
                    value={name.firstname}
                    name="firstname"
                    classname="w-[400px]  h-[46px]"
                    error={error}
                    onChange={handleInputChange}
                    placeholder="Search Job type (i.e. Sales)"
                  />
                </span>
                <AppInput
                  type="Date"
                  label="End date"
                  value={name.firstname}
                  name="firstname"
                  classname="w-[400px]  h-[46px]"
                  error={error}
                  onChange={handleInputChange}
                  placeholder=""
                />
                <span className="flex justify-start items-center">
                  <AppInput
                    type="checkbox"
                    error={false}
                    name="checkbox "
                    value={""}
                    classname="px-0 w-10"
                    label=""
                    onChange={handleInputChange}
                  />
                  <span className="mt-6">I'm looking for my first job</span>
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-center mb-11">
              <APPButton
                types="button"
                disabled={buttonDisabled}
                aria-label="submit signup-form form"
                text="Save & continue"
                loading={loader}
                classname="w-44   border-gray-300 font-semibold"
              />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default WorkExperience;
