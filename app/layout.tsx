import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import LeftDeliveries from "./components/LeftDeliveries";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToastProvider";
import UserProvider from "@/providers/UserProvider";

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
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <LeftDeliveries>{children}</LeftDeliveries>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
