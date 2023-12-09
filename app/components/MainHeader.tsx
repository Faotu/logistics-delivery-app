"use client";

import { useRouter } from "next/navigation";
import { FcPlanner } from "react-icons/fc";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
interface MainHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
  };
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
            className=" cursor-pointer transition text-neutral-400"
          />
          <p className="text-lg hover:text-white cursor-pointer transition text-neutral-400">
            Planner
          </p>
        </div>
        <div className="flex md:hidden gap-x-2 items-center"></div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className=" text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainHeader;
