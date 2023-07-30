import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UserProvider from "@/providers/UserProvider";
import SupaBaseProvider from "@/providers/SupabaseProvider";
import TaskListContextProvider from "@/providers/TaskListContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taking It Easy",
  description: "simple app to track current task in a relaxed way",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupaBaseProvider>
          <UserProvider>
            <TaskListContextProvider>
              <NavBar>{children}</NavBar>
            </TaskListContextProvider>
          </UserProvider>
        </SupaBaseProvider>
      </body>
    </html>
  );
}
