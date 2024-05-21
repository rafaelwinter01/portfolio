import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Separator } from "@/components/ui/separator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafael Winter Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `h-full font-sans antialiased bg-gradient-to-b from-slate-900 to-slate-800 bg-no-repeat bg-fixed`,
          fontSans.variable
        )}
      >
        <Header />
        <Separator
          orientation="horizontal"
          className="h-1 w-full bg-slate-700"
        />
        <main className="w-full h-full flex justify-center">{children}</main>
      </body>
    </html>
  );
}
