// src/app/components/Intro.js
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

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
      <div className="flex flex-row justify-between w-full">
        <div className="p-3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Hi, I&apos;m Jackson</CardTitle>
              <CardDescription>
                I picked up programming mid 2022 and have launched my first
                online business in October 2023. I run it as a solopreneur for
                now, but I have benefitted from meeting and learning from people
                smarter than me on:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row items-center justify-end gap-x-5">
                <a
                  href="https://twitter.com/jacksonllk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2"
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} />Twitter
                </a>
                <a
                  href="https://linkedin.com/in/jacksonllk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} />Linkedin 
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
        <Image
          src="/images/profile-pic-2.jpg"
          alt="Picture of the author"
          width={190}
          height={290}
          className="p-3"
        />
      </div>

      <div className="flex flex-row justify-center w-full mt-4"></div>
    </div>
  );
}
