// src/app/page.js
import React from 'react';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import '../styles/globals.css';
import { Inter as FontSans } from "next/font/google"
import { cn } from "../lib/utils"
import { Button } from '../components/ui/button';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function Page() {
  return (
    <div className={cn(
      "mx-auto px-6 min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}>      
      <Intro />
      <Button>Click me</Button>
      <Portfolio />
      <Blog />
    </div>
  );
}
