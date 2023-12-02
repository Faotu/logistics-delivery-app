"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPeopleLine } from "react-icons/fa6";
import Box from "./Box";

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
    <div className="hidden md:flex  flex-col gap-y-2 bg-black h-full w-[700px] p-2">
      <Box>Navigation</Box>
    </div>
  );
};

export default LeftDeliveries;
