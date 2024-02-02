// /app/page.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <div className="flex flex-col px-12 py-8 justify-center">
      <h1 className="font-semibold text-xl">👋 Hi, I&apos;m Jackson</h1>
      <h2 className="font-semibold mb-3">Indie Hacker, Guitar Enthusiast </h2>
      <p>
        One day mid 2022, I decided to pick up programming and self-learn it with Udemy courses and
        YouTube. I befriended other programmers through Twitter who helped me along the way. I
        launched my first product in October 2023, and have been building and learning ever since.
        Feel free to reach out!
      </p>
      <div className="flex flex-col md:flex-row justify-center my-3">
        <div className="p-3 flex justify-center items-center">
          <div className="flex flex-col">
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/profile-pic.webp"
                alt="Picture of the author"
                // Use standard CSS for sizing and object-fit
                className="object-cover" // Add appropriate CSS classes
                priority="true"
                width={230}
                height={230}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row m-5 justify-between">
            <p className="mx-2">My Product: </p>
            <div className="flex flex-col items-end">
              <Link href="https://tenderpanel.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
                🏗️ TenderPanel
              </Link>
              <Link href="" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600">
                🪙 LMP (Work in progress)
              </Link>
            </div>
          </div>
          <div className="flex flex-row m-5 justify-between">
            <p className="mx-2">My GPTs: </p>
            <div className="flex flex-col items-end">
              <Link
                href="https://chat.openai.com/g/g-p5igkiCKT-file-conversion-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                ♻️ File Conversion GPT
              </Link>
              <Link
                href="https://chat.openai.com/g/g-eWtcggDxb-drinking-game"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                🍸 Drinking Game GPT
              </Link>
            </div>
          </div>
          <div className="flex flex-row m-5 justify-between">
            <p className="mx-2">Follow Me: </p>
            <div className="flex flex-row items-center justify-end gap-x-2 mt-1">
              <div className="icon-container">
                <Link
                  href="https://twitter.com/jackson_llk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  href="https://linkedin.com/in/jacksonllk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  href="https://github.com/jacksonllk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
