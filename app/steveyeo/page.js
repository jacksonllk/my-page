// /app/page.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <div className="flex flex-col px-3 md:px-12 py-8 justify-center">
      <h1 className="font-semibold text-xl">👋 Hi Steve, I&apos;m Jackson Ling</h1>
      <h2 className="font-semibold text-stone-400 mb-3">
        Indie-hacker / ex-accountant / currently in construction, trading & property development{" "}
      </h2>
      <p className="mb-3">
        I hope this finds you well. A bit about myself, I am a self-taught web app developer since
        mid 2022, 38yo and based in Sarawak, Malaysia.
      </p>
      <p className="mb-3">
        I learned with Udemy courses and YouTube with help from other programmers I knew
        through Twitter. I launched my first Saas product{" "}
        <Link
          href="https://tenderpanel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-600"
        >
          tenderpanel.com
        </Link>{" "}
        in October 2023 and currently working on a yet unnamed loan management platform for lenders
        in Australia.
      </p>
      <p className="mb-3">
        I mainly work with Next.js, Tailwind CSS, Python, MongoDB, and Supabase (with heavy assist
        from GPT, Copilot and Stack Overflow)
      </p>
      <p className="mb-3">
        <strong>I love programming.</strong> I would love to be able to make a living off it. Currently I seek to
        improve my skills and gain more industry experience and knowledge. As I still have commitment to my
        business, a remote role would be ideal. My medium-term goal is to transition fully to the tech
        industry.{" "}
      </p>
      <p className="mb-3 italic">
        A personal note and thought: Jia Yi mentioned briefly about you being a self-taught
        programmer as well and your involvement in heading a research centre in NUS besides doing
        work for the government. I am impressed and certain that there is a lot I could learn from
        you.
      </p>

      <div className="flex flex-col md:flex-row justify-center my-3">
        <div className="p-3 flex justify-center items-center">
          <div className="flex flex-col">
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/profile-pic.webp"
                alt="Profile Picture"
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
          <div className="flex flex-col md:flex-row m-5 justify-between">
            <p className="font-semibold mx-2">My Product: </p>
            <div className="flex flex-col items-end">
              <Link
                href="https://tenderpanel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                🏗️ TenderPanel
              </Link>
              <p>
                🪙 LMP (Work in progress)
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row m-5 justify-between">
            <p className="font-semibold mx-2">My GPTs: </p>
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
          <div className="flex flex-col md:flex-row m-5 justify-between">
            <p className="font-semibold mx-2">My Socials: </p>
            <div className="flex flex-row items-center justify-end gap-x-2 mt-1">
              <div className="icon-container">
                <Link
                  href="https://twitter.com/jackson_llk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} className="hover:text-sky-600" />
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  href="https://linkedin.com/in/jacksonllk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="hover:text-sky-600" />
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  href="https://github.com/jacksonllk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="hover:text-sky-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
