import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] border border-input border-b">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div>Logo</div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
