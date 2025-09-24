import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] border border-input border-b">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/" className="text-blue-700 font-semibold">
          BdCalling It Ltd
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
