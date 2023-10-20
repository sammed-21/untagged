"use client";
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

  const handleBackSection = () => {
    // Handle moving back to the previous section
  };

  const handleNextSection = () => {
    // Handle moving to the next section
  };

  const contextValue: OnboardingContextProps = {
    selectedSection,
    setSelectedSection,
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

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      "useOnboardingContext must be used within an OnboardingProvider"
    );
  }
  return context;
};
