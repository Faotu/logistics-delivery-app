"use client";

import React from "react";
import { BiCustomize } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const Planner = () => {
  const onClick = () => {
    // create slots
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <BiCustomize
            className="text-slate-400 cursor-pointer hover:text-white"
            size={36}
          />
          <p className="text-slate-400 font-medium text-md">Your Customers</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className="text-slate-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Customers</div>
    </div>
  );
};

export default Planner;
