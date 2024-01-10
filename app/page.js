// /app/page.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="flex flex-row justify-center mb-12">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-xl mb-3">My Product</h1>
        <Link
          href="https://tenderpanel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-indigo-800 hover:bg-indigo-500 mx-3">🏗️ TenderPanel (Tender aggregation website)</Button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-xl mb-3">My GPTs</h1>
        <Link
          href="https://chat.openai.com/g/g-p5igkiCKT-file-conversion-gpt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-emerald-700 hover:bg-emerald-500">♻️ File Conversion GPT</Button>
        </Link>
      </div>
    </div>
  );
}
