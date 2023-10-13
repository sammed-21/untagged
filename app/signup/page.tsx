"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import sighupBanner from "@/assets/signupbanner.png";
import password from "@/assets/password-invisible.svg";
import GoogleSSO from "@/assets/GoogleSSO.png";
import logo from "@/assets/brand-logo-combined.svg";
import Link from "next/link";
import sighinpasswordvis from "@/assets/password-visible.svg";
import loder from "@/assets/loder.svg";

// import { Inputs } from "@/components/Inputs";
import AppInput from "@/components/AppInput";
import Button from "@/components/AppButton";
import APPButton from "@/components/AppButton";
type visiblePassProp = "password" | "text" | string;
const SignUp = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

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
  return (
    <main className="relative flex w-full justify-between overflow-x-hidden min-h-screen">
      {/* <div className="sticky flex gap-4 justify-center flex-col pt-8 py-10 px-10 "> */}
      <div className="sticky flex flex-col gap-6 xl:w-2/3 md:w-1/2 z-10 bg-white py-8 max-md:sticky max-md:px-4 ">
        <a href="" className="sm:px-5">
          <Image
            src={logo}
            width={180}
            height={30}
            alt="logo"
            className="py-4 px-1"
          />
        </a>

        <div className="flex w-flex-col justify-center items-center">
          <div className="w-full justify-center items-center flex">
            <div className="w-[370px]">
              <h1 className="text-5xl font-normal font-serif text-left">
                Sign up
              </h1>
              <p className="py-5">
                Join Untapped today and get hired by the world’s top tech and
                finance companies.
              </p>
              <span className="text-gray-400">
                Not a candidate?{" "}
                <Link
                  href={"/signin"}
                  className="font-semibold text-[0.875rem] text-[#3365e6]"
                >
                  {" "}
                  Sign up as a recruiter
                </Link>
              </span>
              <div className="relative flex justify-center  px-3  rounded-md items-center w-full h-[37px] border-[1px] border-black my-5">
                <span className="absolute left-2 flex-start">
                  <Image src={GoogleSSO} width={15} height={15} alt="img" />
                </span>
                <span className="border-3 items-center font-semibold justify-center flex-end flex border-black">
                  {" "}
                  Continue with Google
                </span>
              </div>
              <span className="flex my-5 items-center">
                <hr className="flex-grow border-t-2 mr-3" />
                or
                <hr className="flex-grow border-t-2 ml-3" />
              </span>
              <form onSubmit={handleSubmit}>
                <section className="flex flex-col">
                  <div className=" relative w-full  flex justify-between items-center">
                    <AppInput
                      type="text"
                      label="first name"
                      value={name.firstname}
                      name="firstname"
                      classname="w-44"
                      error={error}
                      onChange={handleInputChange}
                      placeholder=""
                    />
                    <AppInput
                      type="text"
                      label="last name"
                      value={name.lastname}
                      classname="w-44"
                      name="lastname"
                      error={error}
                      onChange={handleInputChange}
                      placeholder=""
                    />
                  </div>
                  <AppInput
                    type="text"
                    label="Email"
                    value={name.email}
                    name="email"
                    classname="w-full"
                    error={error}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />

                  <a href="#" className="relative">
                    <span onClick={() => handleVisiblePassword()}>
                      {visiblePassword ? (
                        <Image
                          src={sighinpasswordvis}
                          width={20}
                          height={20}
                          className="absolute top-[65px] right-3"
                          alt="image"
                        />
                      ) : (
                        <Image
                          src={password}
                          width={20}
                          height={20}
                          className="absolute top-[65px] right-3"
                          alt="image"
                        />
                      )}
                    </span>

                    <AppInput
                      type={passwordType}
                      label="password"
                      value={name.password}
                      name="password"
                      classname="w-full"
                      error={error}
                      onChange={handleInputChange}
                      placeholder="password"
                    />
                  </a>
                  <div className="py-3">
                    <APPButton
                      types="submit"
                      text="Signnp"
                      loading={loader}
                      classname="w-full border-gray-300 font-semibold"
                    />
                  </div>
                </section>
              </form>
              <div className="text-sm">
                <p className="text-gray-400">
                  By clicking “Sign up” or “Sign up with Google,” you’re
                  agreeing to Untapped’s{" "}
                  <span className="underline">Terms of Use.</span>
                </p>
                <br />
                <p>
                  Already have an Untapped account?{" "}
                  <Link
                    className="font-semibold text-[0.875rem] text-[#3365e6] "
                    href={"/signin"}
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex xl:w-2/6 max-md:pt-0 sm:w-1/2 min-h-screen-full max-md:w-full">
        <div className="relative  w-full object-fill ">
          <Image
            src={sighupBanner}
            fill
            alt="image"
            className=" w-full  max-md:object-none  object-none transform "
            // className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
