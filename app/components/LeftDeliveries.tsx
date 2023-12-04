"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPeopleLine } from "react-icons/fa6";
import Box from "./Box";
import DeliveryList from "./DeliveryList";
import { twMerge } from "tailwind-merge";
import Planner from "./Planner";

interface LeftDeliveriesProps {
  children: React.ReactNode;
}
const LeftDeliveries: React.FC<LeftDeliveriesProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: CiDeliveryTruck,
        label: "Deliveries",
        active: pathname !== "/customer",
        href: "/",
      },
      {
        icon: FaPeopleLine,
        label: "Customer",
        active: pathname === "/customer",
        href: "/customer",
      },
    ],
    []
  );
  return (
    <div
      className={twMerge(
        `
        flex
        h-full
      `
      )}
    >
      <div
        className="
      hidden 
      md:flex 
      flex-col
      gap-y-2
      bg-black
      h-full
      w-[600px]
      p-2"
      >
        <Box>
          <div>
            {routes.map((item) => (
              <DeliveryList key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box classname="overflow-y-auto h-full">
          <Planner />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default LeftDeliveries;
