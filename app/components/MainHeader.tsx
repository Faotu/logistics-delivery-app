"use client";

import { useRouter } from "next/navigation";
import { FcPlanner } from "react-icons/fc";
import React from "react";
import { twMerge } from "tailwind-merge";
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
          <FcPlanner size={36} className="hover:" />
          <p>Planner</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
