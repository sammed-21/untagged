"use client";
import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import logo from "@/assets/brand-logo-combined.svg";
import backarrow from "@/assets/backarrow.svg";

import AppInput from "@/components/AppInput";
import WorkExperience from "@/components/Onboarding/WorkExperience";

interface Props {
  children: ReactNode;
}
type visiblePassProp = "password" | "text" | string;
const OnboardingPage = ({ children }: Props) => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [selectedSection, setSelectionSection] = useState("work experience");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordType, setPasswordType] = useState<visiblePassProp>("password");

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
  const handleVisiblePassword = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
    setVisiblePassword((prev) => !prev);
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
    <div className="w-full min-h-screen bg-gray-100 relative flex justify-center space-x-[32px] items-center">
      <div className="absolute left-[2.56rem] top-[3rem]">
        <Image src={logo} width={200} height={75} alt="logo" className="" />
      </div>
      <section className="flex w-full justify-center gap-6 mt-[44px]">
        <div className="w-[67%] min-h-[90vh] bg-white rounded-lg shadow-md">
          <div className="flex space-x-6 gap-5 items-center text-xs  justify-center py-8">
            <Image src={backarrow} alt={"image"} width={10} height={10} />
            <p onClick={() => setSelectionSection("work experience")}>
              Work Experience
            </p>
            <p onClick={() => setSelectionSection("education")}>Education</p>
            <p onClick={() => setSelectionSection("resume")}>Resume</p>
            <p onClick={() => setSelectionSection("skillset")}>Skill Set</p>
            <p onClick={() => setSelectionSection("authorization")}>
              Authorization
            </p>
          </div>
          <hr className="underline " />
          <WorkExperience />
        </div>
      </section>
    </div>
  );
};

export default OnboardingPage;
