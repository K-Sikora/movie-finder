import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { ThemesProvider } from "@/components/ThemesProvider";
import { Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/redux/provider";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommender",
  description: "Movie Recommender - Find a perfect movie/tv show",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body
          className={`${space_grotesk.className} min-w-[300px] overflow-auto`}
        >
          <ThemesProvider>
            <ReduxProvider>
              <Navbar />
              {children}
              <Toaster />
            </ReduxProvider>
          </ThemesProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
