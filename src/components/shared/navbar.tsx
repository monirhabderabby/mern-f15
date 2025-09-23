import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] border border-input border-b">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/">
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
