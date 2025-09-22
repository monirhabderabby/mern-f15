import Navbar from "@/components/shared/navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const WebsiteLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default WebsiteLayout;
