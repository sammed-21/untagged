// import MainHeader from "@/components/MainHeader";
// import Sidebar from "@/components/Sidebar";
// import MenuContextProvider from "@/context/MenuContext";
// import React, { ReactNode } from "react";
// type Props = {
//   children: ReactNode;
// };
// const layout = (props: Props) => {
//   return (
//     <MenuContextProvider>
//       <div className=" relative grid">
//         <div className="relative ">
//           <Sidebar />
//         </div>
//         <main className=" relative w-full">{props.children}</main>
//       </div>
//     </MenuContextProvider>
//   );
// };

// export default layout;
"use client";
import MainHeader from "@/components/MainHeader";
import Sidebar from "@/components/Sidebar";
import MenuContextProvider from "@/context/MenuContext";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const segment = useSelectedLayoutSegment();
  return (
    <MenuContextProvider>
      <div className="flex  bg-gray-100 relative overflow-hidden  md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}

        <div className=" relative flex-col lg:ml-[280px] pl-2 flex flex-1 w-full xl:ml-18  ">
          {/* Header */}

          <div className="lg:hidden">
            <MainHeader />
          </div>
          <div className="max-w-screen-2xl">{props.children}</div>
        </div>
      </div>

      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex  flex-1 lg:ml-72  flex-col overflow-y-auto overflow-x-hidden">
          {/* <MainHeader /> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4  md:p-6 2xl:p-10">
              {props.children}
            </div>
          </main>
        </div>
      </div>
    </MenuContextProvider>
  );
};

export default Layout;
