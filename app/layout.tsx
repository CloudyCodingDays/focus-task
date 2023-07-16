import SidePanel from "@/components/SidePanel";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go at My Pace",
  description: "simple app to track current tasks in a stress free manner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidePanel>
          <NavBar />
          {children}
        </SidePanel>
      </body>
    </html>
  );
}
