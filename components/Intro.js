// src/app/components/Intro.js
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faFacebook,
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
      <div className="flex flex-row justify-between w-auto max-w-[1000px]">
        <div className="p-3">
          <Card className="w-full">
            <div className="flex flex-row">
              <div>
                <CardHeader>
                  <CardTitle>Hi, I&apos;m Jackson</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row">
                    <p>
                      I picked up programming mid 2022 and have launched my first
                      online business in October 2023. I run it as a solopreneur for
                      now.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row items-center justify-end gap-x-3">
                    <p>Find me here:</p>
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
                  </div>
                </CardFooter>
              </div>
              <div className="p-6 flex items-center">
          <div className="relative w-full max-w-[200px] h-auto aspect-square rounded-md overflow-hidden sm:max-w-[300px]">
            <Image
              src="/images/profile-pic.jpg"
              alt="Picture of the author"
              layout="responsive"
              width={300} // Max width for larger screens
              height={300} // Ensure square aspect ratio
              objectFit="cover"
            />
          </div>
        </div>
            </div>
          </Card>
        </div>
        {/* <div className="p-3">
          <div className="relative w-[300px] h-[450px] rounded-md overflow-hidden">
            <Image
              src="/images/profile-pic-2.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
