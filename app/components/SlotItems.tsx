"use client";
import { useRouter } from "next/navigation";
// import { IoCalendarNumberOutline } from "react-icons/io5";
import React from "react";

interface SlotItemsProps {
  date: string;
  slot: string;
  href: string;
  name: string;
}
const SlotItems: React.FC<SlotItemsProps> = ({ date, slot, href }) => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const onClick = () => {
    // Implement Auth before push
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] m-w-[64px]">
        {/* <IoCalendarNumberOutline /> */}
        <p>Current Date: {formattedDate}</p>
      </div>
      <p className="font-medium py-5">{slot}</p>
    </button>
  );
};

export default SlotItems;
