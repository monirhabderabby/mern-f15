"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";

interface Props {
  name: string;
}

const Topbar = ({ name }: Props) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background dark:border-white/20  px-6">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">{name}</p>
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Topbar;
