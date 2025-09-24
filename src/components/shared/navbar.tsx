import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] border border-input border-b">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/">
          <Image src={logo} width={40} height={40} alt="Logo" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
