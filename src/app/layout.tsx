import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "MERN F15 Leaderboard | BdCalling Academy",
  description:
    "Track and compare MERN F15 students' performance with the official BdCalling Academy leaderboard. View rankings, scores, and progress in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
          <NextTopLoader showSpinner={false} color="#045EAB" />
        </ThemeProvider>
      </body>
    </html>
  );
}
