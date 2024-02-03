import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>Jackson&apos;s Portfolio & Blog Page</title>
      </head>
      <body
        className={cn(
          "mx-auto px-6 max-w-[740px] font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
