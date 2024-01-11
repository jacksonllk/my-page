// /app/page.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <div className="flex flex-col items-center mx-3">
        <h1 className="text-center font-bold text-xl mb-3">My Product</h1>
        <Link
          href="https://tenderpanel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-indigo-800 hover:bg-indigo-500 mb-3">🏗️ TenderPanel (Aggregation website)</Button>
        </Link>
      </div>
      <div className="flex flex-col items-center mx-3">
        <h1 className="text-center font-bold text-xl mb-3">My GPTs</h1>
        <Link
          href="https://chat.openai.com/g/g-p5igkiCKT-file-conversion-gpt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-emerald-700 hover:bg-emerald-500 mb-3">♻️ File Conversion GPT</Button>
        </Link>
      </div>
    </div>
  );
}
