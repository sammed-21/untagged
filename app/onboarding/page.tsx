"use client";
// import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
// import Image from "next/image";
// import backarrow from "@/assets/backarrow.svg";

// import AppInput from "@/components/AppInput";
// import WorkExperience from "@/components/Onboarding/WorkExperience";
// import SkillSetPage from "@/components/Onboarding/SkillSetPage";
// import ResumePage from "@/components/Onboarding/ResumePage";
// import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";

// interface Props {
//   children: ReactNode;
// }
// type visiblePassProp = "password" | "text" | string;
// const OnboardingPage = ({ children }: Props) => {
//   const [name, setName] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });
//   const [selectedSection, setSelectionSection] = useState("work experience");
//   const [error, setError] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const [visiblePassword, setVisiblePassword] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [passwordType, setPasswordType] = useState<visiblePassProp>("password");

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     setName((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const isAnyEmpty = Object.values(name).some((value) => value === "");
//     setLoader(true);
//     if (isAnyEmpty) {
//       setError(true);
//     } else {
//       setError(false);
//     }
//   };
//   const handleVisiblePassword = () => {
//     setPasswordType((prev) => (prev === "password" ? "text" : "password"));
//     setVisiblePassword((prev) => !prev);
//   };
//   React.useEffect(() => {
//     if (
//       name.firstname.length > 0 &&
//       name.lastname.length > 0 &&
//       name.email.length > 0 &&
//       name.password.length > 0
//     ) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [name]);
//   return (
//     <div className="w-full  min-h-screen bg-gray-100 relative flex justify-center space-x-[32px] items-center">
//       <section className="flex w-full  justify-center gap-6 mt-[44px] shadow-xl z-10">
//         <div className="w-[1000px] h-auto bg-white rounded-lg shadow-md">
//           <div className="flex space-x-6 gap-5 w-full flex-wrap items-center text-xs  justify-center py-8">
//             <Image src={backarrow} alt={"image"} width={10} height={10} />
//             <p
//               className="text-black font-semibold"
//               onClick={() => setSelectionSection("work experience")}
//             >
//               Work Experience
//             </p>
//             <p onClick={() => setSelectionSection("education")}>Education</p>
//             <p onClick={() => setSelectionSection("resume")}>Resume</p>
//             <p onClick={() => setSelectionSection("skillset")}>Skill Set</p>
//             <p onClick={() => setSelectionSection("authorization")}>
//               Authorization
//             </p>
//           </div>
//           <hr className="underline" />

//           <WorkExperience />
//           <SkillSetPage />
//           <ResumePage />
//           <AuthorizationPage />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OnboardingPage;

// 'use cli'

import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import backarrow from "@/assets/backarrow.svg";

import AppInput from "@/components/AppInput";
import WorkExperience from "@/components/Onboarding/WorkExperience";
import SkillSetPage from "@/components/Onboarding/SkillSetPage";
import ResumePage from "@/components/Onboarding/ResumePage";
import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";
import EducationPage from "@/components/Onboarding/EducationPage";

interface Props {
  children: ReactNode;
}

type VisiblePassProp = "password" | "text" | string;

const OnboardingPage: React.FC<Props> = ({ children }: Props) => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [selectedSection, setSelectedSection] = useState("work experience");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordType, setPasswordType] = useState<VisiblePassProp>("password");

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
    <div className="w-full bg-gray-100 relative flex justify-center space-x-[32px] items-center">
      <section className="flex w-full min-h-fit justify-center gap-6 mt-[44px] shadow-xl z-10">
        <div className="w-[1000px] bg-white rounded-lg shadow-md p-8">
          <div className="flex space-x-6 gap-5 w-full flex-wrap items-center text-xs justify-center py-8">
            <Image src={backarrow} alt={"image"} width={10} height={10} />
            <p
              className="text-black font-semibold cursor-pointer"
              onClick={() => setSelectedSection("work experience")}
            >
              Work Experience
            </p>
            <p
              className="cursor-pointer"
              onClick={() => setSelectedSection("education")}
            >
              Education
            </p>
            <p
              className="cursor-pointer"
              onClick={() => setSelectedSection("resume")}
            >
              Resume
            </p>
            <p
              className="cursor-pointer"
              onClick={() => setSelectedSection("skillset")}
            >
              Skill Set
            </p>
            <p
              className="cursor-pointer"
              onClick={() => setSelectedSection("authorization")}
            >
              Authorization
            </p>
          </div>
          <hr className="underline" />

          {selectedSection === "work experience" && <WorkExperience />}
          {
            selectedSection === "education" && <EducationPage />
            /* EducationComponent */
          }
          {selectedSection === "resume" && <ResumePage />}
          {selectedSection === "skillset" && <SkillSetPage />}
          {selectedSection === "authorization" && <AuthorizationPage />}
        </div>
      </section>
    </div>
    // <div className="container bg-gray-100 py-9 flex justify-center items-center">
    //   <section className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
    //     <div className="bg-white rounded-lg p-8">
    //       <div className="flex space-x-6 gap-5 w-full flex-wrap items-center text-xs justify-center py-8">
    //         <Image src={backarrow} alt={"image"} width={10} height={10} />
    //         <p
    //           className="text-black font-semibold cursor-pointer"
    //           onClick={() => setSelectedSection("work experience")}
    //         >
    //           Work Experience
    //         </p>
    //         <p
    //           className="cursor-pointer"
    //           onClick={() => setSelectedSection("education")}
    //         >
    //           Education
    //         </p>
    //         <p
    //           className="cursor-pointer"
    //           onClick={() => setSelectedSection("resume")}
    //         >
    //           Resume
    //         </p>
    //         <p
    //           className="cursor-pointer"
    //           onClick={() => setSelectedSection("skillset")}
    //         >
    //           Skill Set
    //         </p>
    //         <p
    //           className="cursor-pointer"
    //           onClick={() => setSelectedSection("authorization")}
    //         >
    //           Authorization
    //         </p>
    //       </div>
    //       <hr className="underline" />

    //       {selectedSection === "work experience" && <WorkExperience />}
    //       {
    //         selectedSection === "education" && (
    //           <EducationPage />
    //         ) /* EducationComponent */
    //       }
    //       {selectedSection === "resume" && <ResumePage />}
    //       {selectedSection === "skillset" && <SkillSetPage />}
    //       {selectedSection === "authorization" && <AuthorizationPage />}
    //     </div>
    //   </section>
    // </div>
  );
};

export default OnboardingPage;
