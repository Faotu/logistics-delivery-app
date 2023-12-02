import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import LeftDeliveries from "./components/LeftDeliveries";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logistic Delivery",
  description: "Delivery and Planner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LeftDeliveries>{children}</LeftDeliveries>
      </body>
    </html>
  );
}