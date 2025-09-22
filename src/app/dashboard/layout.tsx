import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import Topbar from "./_components/top-bar";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex  flex-col">
      <Sidebar />
      {/* Main Content */}
      <div className="ml-60 flex flex-1 flex-col">
        {/* Top Bar */}
        <Topbar name={"Monir Hossain"} />

        <div className=" bg-[#F5F7FA] dark:bg-background p-6   h-[calc(100vh-160px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
