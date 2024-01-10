// src/app/components/Intro.js
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Intro() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between w-auto max-w-full">
        <div className="p-3">
          <Card className="w-full">
            <div className="flex flex-col sm:flex-row">
              <div>
                <CardHeader>
                  <CardTitle>👋 Hi, I&apos;m Jackson</CardTitle>
                  <CardDescription>Indie Hacker, Guitar & Bass Enthusiast </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <p className="max-w-[300px]">
                      One day mid 2022, I decided to pick up programming and
                      self-learn it with Udemy courses and YouTube. I befriended
                      several experienced programmers through Twitter who helped me along the
                      way. I launched my first product in October 2023, and have
                      been building and continuing to learn ever since. Feel
                      free to reach out!
                    </p>
                  </div>
                </CardContent>
              </div>
              <div className="p-3 flex items-center justify-center">
                <div className="flex flex-col">
                  <div className="relative max-w-[300px] h-auto rounded-md overflow-hidden">
                    <img
                      src="/images/profile-pic.webp"
                      alt="Picture of the author"
                      // Use standard CSS for sizing and object-fit
                      className="object-cover" // Add appropriate CSS classes
                      priority="true"
                      width={300}
                      height={300}
                    />
                  </div>
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
          </Card>
        </div>
      </div>
    </div>
  );
}
