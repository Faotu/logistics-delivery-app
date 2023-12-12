"use client";

import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { FcPlanner } from "react-icons/fc";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useUser } from "@/hooks/useUser";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
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
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!!!");
    }
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
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>

              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
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
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainHeader;
