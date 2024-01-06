// /app/page.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-xl mb-3">My Product</h1>
      <Link
        href="https://tenderpanel.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-indigo-800 hover:bg-indigo-500">🏗️ TenderPanel (Tender aggregation website)</Button>
      </Link>
    </div>
  );
}
