import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxPros {
  children: React.ReactNode;
  classname?: string;
}
const Box: React.FC<BoxPros> = ({ children, classname }) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, classname)}
    >
      {children}
    </div>
  );
};

export default Box;
