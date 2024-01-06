import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Intro from "@/components/Intro";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>Portfolio & Blog Page</title>
      </head>
      <body
        className={cn(
          "mx-auto px-6 min-h-screen max-w-[960px] bg-slate-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Intro />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
