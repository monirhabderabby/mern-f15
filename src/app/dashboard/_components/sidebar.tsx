"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRight,
  DiamondMinus,
  FileText,
  LogOut,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    id: 1,
    label: "Students",
    icon: Users,
    href: "/dashboard",
  },
  {
    id: 3,
    label: "Assignment",
    icon: FileText,
    href: "/dashboard/assignment",
  },
  {
    id: 4,
    label: "Marks",
    icon: DiamondMinus,
    href: "/marks",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-50 w-60 border-r  ">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b p-4 flex justify-center items-center border-black/30 dark:border-white/20">
            <div className="relative h-[100px] w-[150px] flex items-center">
              Logo
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-auto p-3">
            <ul className="space-y-2">
              {routes.map((route) => {
                const Icon = route.icon;
                const isActive =
                  route.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(route.href);

                return (
                  <li key={route.id}>
                    <Link
                      href={route.href}
                      className={`flex items-center gap-3 rounded-md px-3 text-[14px] py-2
          ${
            isActive
              ? "bg-primary dark:bg-customYellow-primary/10 text-primary-foreground dark:text-customYellow-primary"
              : "text-muted-foreground  hover:bg-muted hover:text-foreground dark:hover:text-customYellow-primary"
          }
        `}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{route.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="border-t p-3 hover:bg-gray-50 dark:hover:bg-white/5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-between gap-1 w-full cursor-pointer ">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.avif" />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <h1 className="text-[14px] truncate w-36 ">
                        Monir Hossain
                      </h1>
                      <p className="text-[12px]">Teacher</p>
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="right" className="w-40">
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <User /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
