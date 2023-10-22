// "use client";
// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   Dispatch,
//   SetStateAction,
// } from "react";
// import WorkExperience from "@/components/Onboarding/WorkExperience";
// import EducationPage from "@/components/Onboarding/EducationPage";
// import ResumePage from "@/components/Onboarding/ResumePage";
// import SkillSetPage from "@/components/Onboarding/SkillSetPage";
// import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";

// interface OnboardingContextProps {
//   selectedSection: string;
//   setSelectedSection: Dispatch<SetStateAction<string>>;
//   transitionDirection: number;
//   handleSectionChange: Dispatch<SetStateAction<string>>;
//   setTransitionDirection: Dispatch<SetStateAction<number>>;
//   handleBackSection: () => void;
//   handleNextSection: () => void;
//   componentsMap: Record<string, { component: React.ReactNode; index: number }>;
// }

// const OnboardingContext = createContext<OnboardingContextProps | undefined>(
//   undefined
// );

// export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [selectedSection, setSelectedSection] = useState("workexperience");
//   const [transitionDirection, setTransitionDirection] = useState(1);
//   const [backSelectedSection, setBackSelectedSection] = useState("");
//   // const handleSectionChange = (section: string) => {
//   //   setSelectedSection(section);
//   // };

//   const componentsMap: Record<
//     string,
//     { component: React.ReactNode; index: number }
//   > = {
//     workexperience: {
//       component: <WorkExperience />,
//       index: 0,
//     },
//     education: { component: <EducationPage />, index: 1 },
//     resume: { component: <ResumePage />, index: 2 },
//     skillset: { component: <SkillSetPage />, index: 3 },
//     authorization: { component: <AuthorizationPage />, index: 4 },
//   };
//   const currentIndex = componentsMap[selectedSection].index;

//   const handleSectionChange = (section: string) => {
//     setBackSelectedSection(section);
//     const nextIndex = componentsMap[section].index;
//     setSelectedSection(section);
//     const direction = nextIndex > currentIndex ? 1 : -1;
//     setTransitionDirection(direction);
//   };
//   const handleBackSection = () => {
//     if (componentsMap[backSelectedSection].index > 0) {
//       const previousIndex = componentsMap[backSelectedSection].index - 1;
//       const previousSection = Object.keys(componentsMap).find(
//         (key) => componentsMap[key].index === previousIndex
//       );
//       if (previousSection) {
//         setSelectedSection(previousSection);
//         setTransitionDirection(-1); // Set direction to move left
//       }
//     }
//   };
//   const handleNextSection = () => {
//     const currentIndex = componentsMap[selectedSection].index;
//     const nextIndex = currentIndex + 1;
//     const nextSection = Object.keys(componentsMap).find(
//       (key) => componentsMap[key].index === nextIndex
//     );

//     if (nextSection) {
//       setSelectedSection(nextSection);
//       setTransitionDirection(1); // Set direction to move right
//     }
//   };

//   const contextValue: OnboardingContextProps = {
//     selectedSection,
//     setSelectedSection,
//     handleSectionChange,
//     transitionDirection,
//     setTransitionDirection,
//     handleBackSection,
//     handleNextSection,
//     componentsMap,
//   };

//   return (
//     <OnboardingContext.Provider value={contextValue}>
//       {children}
//     </OnboardingContext.Provider>
//   );
// };

// export const useOnboardingContext = () => {
//   const context = useContext(OnboardingContext);
//   if (!context) {
//     throw new Error(
//       "useOnboardingContext must be used within an OnboardingProvider"
//     );
//   }
//   return context;
// };
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import WorkExperience from "@/components/Onboarding/WorkExperience";
import EducationPage from "@/components/Onboarding/EducationPage";
import ResumePage from "@/components/Onboarding/ResumePage";
import SkillSetPage from "@/components/Onboarding/SkillSetPage";
import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";

interface OnboardingContextProps {
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
  handleInputChange: (section: string) => void; // Define the function in the context interface
  transitionDirection: number;
  setTransitionDirection: Dispatch<SetStateAction<number>>;
  handleBackSection: () => void;
  handleNextSection: () => void;
  componentsMap: Record<string, { component: React.ReactNode; index: number }>;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(
  undefined
);

export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSection, setSelectedSection] = useState("workexperience");
  const [transitionDirection, setTransitionDirection] = useState(1);
  const [backSelectedSection, setBackSelectedSection] = useState("");
  const componentsMap: Record<
    string,
    { component: React.ReactNode; index: number }
  > = {
    workexperience: {
      component: <WorkExperience />,
      index: 0,
    },
    education: { component: <EducationPage />, index: 1 },
    resume: { component: <ResumePage />, index: 2 },
    skillset: { component: <SkillSetPage />, index: 3 },
    authorization: { component: <AuthorizationPage />, index: 4 },
  };
  const currentIndex = componentsMap[selectedSection].index;

  const handleInputChange = (section: string) => {
    setBackSelectedSection(section);
    const nextIndex = componentsMap[section].index;
    setSelectedSection(section);
    const direction = nextIndex > currentIndex ? 1 : -1;
    setTransitionDirection(direction);
  };

  const handleBackSection = () => {
    // Handle moving back to the previous section
  };

  const handleNextSection = () => {
    const currentIndex = componentsMap[selectedSection].index;
    const nextIndex = currentIndex + 1;
    const nextSection = Object.keys(componentsMap).find(
      (key) => componentsMap[key].index === nextIndex
    );

    if (nextSection) {
      setSelectedSection(nextSection);
      setTransitionDirection(1); // Set direction to move right
    }
  };

  const contextValue: OnboardingContextProps = {
    selectedSection,
    setSelectedSection,

    handleInputChange, // Pass the function in the context value
    transitionDirection,
    setTransitionDirection,
    handleBackSection,
    handleNextSection,
    componentsMap,
  };

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};

// export const useOnboardingContext = () => {
//   const context = useContext(OnboardingContext);
//   if (!context) {
//     throw new Error(
//       "useOnboardingContext must be used within an OnboardingProvider"
//     );
//   }
//   return context;
// };
