import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import LeftDeliveries from "./components/LeftDeliveries";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ModalProvider from "@/providers/ModalProvider";

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
        <SupabaseProvider>
          <SupabaseProvider>
            <ModalProvider />
            <LeftDeliveries>{children}</LeftDeliveries>
          </SupabaseProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
