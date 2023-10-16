// "use client";

// import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
// import Image from "next/image";
// import backarrow from "@/assets/backarrow.svg";
// import { motion } from "framer-motion";
// import AppInput from "@/components/AppInput";
// import WorkExperience from "@/components/Onboarding/WorkExperience";
// import SkillSetPage from "@/components/Onboarding/SkillSetPage";
// import ResumePage from "@/components/Onboarding/ResumePage";
// import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";
// import EducationPage from "@/components/Onboarding/EducationPage";

// interface Props {
//   children: ReactNode;
// }
// const componentsMap: Record<
//   string,
//   { component: React.ReactNode; index: number }
// > = {
//   "work experience": { component: <WorkExperience />, index: 0 },
//   education: { component: <EducationPage />, index: 1 },
//   resume: { component: <ResumePage />, index: 2 },
//   skillset: { component: <SkillSetPage />, index: 3 },
//   authorization: { component: <AuthorizationPage />, index: 4 },
// };
// const pageVariants = {
//   initial: { opacity: 0, x: "100%" },
//   animate: { opacity: 1, x: "0%" },
//   exit: { opacity: 0, x: "-100%" },
// };

// type VisiblePassProp = "password" | "text" | string;

// const OnboardingPage: React.FC<Props> = ({ children }: Props) => {
//   const [name, setName] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });
//   const [selectedSection, setSelectedSection] = useState("work experience");
//   const [error, setError] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const [visiblePassword, setVisiblePassword] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [passwordType, setPasswordType] = useState<VisiblePassProp>("password");

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

//   const currentIndex = componentsMap[selectedSection].index;

//   const handleSectionChange = (section: string) => {
//     const nextIndex = componentsMap[section].index;
//     setSelectedSection(section);
//     const direction = nextIndex > currentIndex ? 1 : -1;
//     setTransitionDirection(direction);
//   };

//   const [transitionDirection, setTransitionDirection] = useState(1);

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
//     <div className="w-full  relative flex justify-center space-x-[32px] items-center">
//       <section className="flex w-full min-h-fit my-8   justify-center gap-6 mt-[44px]  z-10">
//         <div className="w-[1000px] min-h-[60vh] bg-white rounded-lg  p-8">
//           <div className="flex space-x-6 gap-5 w-full flex-wrap items-center text-xs justify-center py-8">
//             <Image src={backarrow} alt={"image"} width={10} height={10} />

//             {Object.keys(componentsMap).map((section) => (
//               <p
//                 key={section}
//                 className="text-black font-semibold cursor-pointer"
//                 onClick={() => handleSectionChange(section)}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </p>
//             ))}
//           </div>
//           <hr className="underline" />
//           {selectedSection in componentsMap && (
//             <motion.div
//               key={selectedSection}
//               initial={{ opacity: 0, x: `${100 * transitionDirection}%` }}
//               animate={{ opacity: 1, x: "0%" }}
//               exit={{ opacity: 0, x: `${-100 * transitionDirection}%` }}
//               transition={{ duration: 0.5 }}
//             >
//               {componentsMap[selectedSection].component}
//             </motion.div>
//           )}
//           {/* {selectedSection === "work experience" && <WorkExperience />}
//           {
//             selectedSection === "education" && <EducationPage />

//           }
//           {selectedSection === "resume" && <ResumePage />}
//           {selectedSection === "skillset" && <SkillSetPage />}
//           {selectedSection === "authorization" && <AuthorizationPage />} */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OnboardingPage;
"use client";
import { motion } from "framer-motion";
import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import backarrow from "@/assets/backarrow.svg";
import WorkExperience from "@/components/Onboarding/WorkExperience";
import SkillSetPage from "@/components/Onboarding/SkillSetPage";
import ResumePage from "@/components/Onboarding/ResumePage";
import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";
import EducationPage from "@/components/Onboarding/EducationPage";

interface Props {
  children: ReactNode;
}

type VisiblePassProp = "password" | "text" | string;

const componentsMap: Record<
  string,
  { component: React.ReactNode; index: number }
> = {
  "work experience": { component: <WorkExperience />, index: 0 },
  education: { component: <EducationPage />, index: 1 },
  resume: { component: <ResumePage />, index: 2 },
  skillset: { component: <SkillSetPage />, index: 3 },
  authorization: { component: <AuthorizationPage />, index: 4 },
};

const OnboardingPage: React.FC<Props> = ({ children }: Props) => {
  const [selectedSection, setSelectedSection] = useState("work experience");

  const currentIndex = componentsMap[selectedSection].index;

  const handleSectionChange = (section: string) => {
    const nextIndex = componentsMap[section].index;
    setSelectedSection(section);
    const direction = nextIndex > currentIndex ? 1 : -1;
    setTransitionDirection(direction);
  };

  const [transitionDirection, setTransitionDirection] = useState(1);

  return (
    <div className="w-full bg-gray-200 min-h-screen relative flex justify-center space-x-[32px] items-center">
      <section className="flex w-full max-xl:mx-4 border-none min-h-fit justify-center gap-6 my-[44px]  z-10">
        <div className="container xl:w-[65%] max-xl:w-full max-xl:items-center bg-white rounded-lg p-2">
          <div className="flex space-x-6 gap-5 w-full flex-wrap items-center text-xs justify-center py-8">
            <Image src={backarrow} alt={"image"} width={10} height={10} />
            {Object.keys(componentsMap).map((section) => (
              <p
                key={section}
                className={`text-black cursor-pointer ${
                  selectedSection === section ? "font-semibold" : "font-normal"
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
            ))}
          </div>
          <hr className="underline" />

          <div className="flex border-none bg-white justify-center overflow-x-hidden -z-20 ">
            {selectedSection in componentsMap && (
              <motion.div
                className="min-w-full px-9"
                key={selectedSection}
                initial={{ opacity: 0, x: `${100 * transitionDirection}%` }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: `${-100 * transitionDirection}%` }}
                transition={{ duration: 0.5 }}
              >
                {componentsMap[selectedSection].component}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnboardingPage;
