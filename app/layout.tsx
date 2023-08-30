import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UserProvider from "@/providers/UserProvider";
import SupaBaseProvider from "@/providers/SupabaseProvider";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ThemeContextProvider from "@/providers/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus Task",
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
            <ThemeContextProvider>
              <ReactQueryProvider>
                <NavBar>{children}</NavBar>
              </ReactQueryProvider>
            </ThemeContextProvider>
          </UserProvider>
        </SupaBaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
