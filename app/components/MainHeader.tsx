"use client";

import { useRouter } from "next/navigation";
import { FcPlanner } from "react-icons/fc";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
interface MainHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <FcPlanner
            size={36}
            className="hover:text-white cursor-pointer transition text-neutral-400"
          />
          <p className="text-lg hover:text-white cursor-pointer transition text-neutral-400">
            Planner
          </p>
        </div>
        <div className="flex md:hidden gap-x-2 items-center"></div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button>Sign up</Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
