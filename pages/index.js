import Image from "next/image";
import { Inter } from "next/font/google";
import Skill from "@/components/Skill";
import { useState } from "react";
import Link from "next/link";
import Work from "@/components/Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hoverBackend, setHoverBackend] = useState(false); // Track hover state
  const [hoverFrontend, setHoverFrontend] = useState(false); // Track hover state

  const handleHoverBackend = () => setHoverBackend(!hoverBackend);
  const handleHoverFrontend = () => setHoverFrontend(!hoverFrontend);

  return (
    <div>
      <div className="sm:px-3 lg:px-56 lg:py-5 flex lg:justify-between bg-gray-50 shadow-md">
        <Link
          href="/work/backend"
          className="m-auto "
          onMouseEnter={handleHoverFrontend}
          onMouseLeave={handleHoverFrontend}
        >
          <div className="w-[50%]  frontend">
            <h1 className="sm:text-2xl  md:text-5xl font-bold opacity-80 ">
              FrontEnd
            </h1>
            <h1 className="md:absolute sm:hidden lg:block text-md font-normal pt-1 text-gray-600">
              I am a full-stack developer with strong skills
            </h1>
          </div>
        </Link>

        <div className="flex justify-center ">
          <div className="flex justify-center text-center  ">
            <Image
              className={`relative rounded-md z-10 transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                ${hoverFrontend ? "saturate-200 scale-105" : ""}
                `}
              src="/profile/big.png"
              width={700}
              height={700}
            />
            <Image
              className={`sm:hidden lg:block absolute bottom-[150px] right-[30%] z-0 rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                    ${hoverFrontend ? "saturate-200 scale-105" : ""}
                    `}
              src="/logo/nodejs.png"
              width={100}
              height={100}
            />
            <Image
              className={`sm:hidden lg:block absolute  bottom-[30px] right-[27%] z-0 rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                ${hoverFrontend ? "saturate-200 scale-105" : ""}
                `}
              src="/logo/postman.png"
              width={150}
              height={150}
            />
            <Image
              className={`sm:hidden lg:block absolute bottom-[-10px] right-[25%] z-0 rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                ${hoverFrontend ? "saturate-200 scale-105" : ""}
                `}
              src="/logo/mysql.png"
              width={150}
              height={150}
            />

            <Image
              className={`sm:hidden lg:block absolute bottom-[150px] left-[25%] z-0 rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
    ${hoverFrontend ? "saturate-200 scale-105" : ""}
    `}
              src="/logo/nextjs.png"
              width={150}
              height={150}
            />
            <Image
              className={`sm:hidden lg:block absolute bottom-[80px] left-[28%] z-0 rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                ${hoverFrontend ? "saturate-200 scale-105" : ""}
                `}
              src="/logo/vue.png"
              width={70}
              height={100}
            />
            <Image
              className={`sm:hidden lg:block absolute bottom-[-10px] left-[27%]  z-0 rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                ${hoverFrontend ? "saturate-200 scale-105" : ""}
                `}
              src="/logo/react.png"
              width={150}
              height={150}
            />
          </div>
        </div>

        <Link href="/work/backend" className="m-auto">
          <div
            className="w-[50%]"
            onMouseEnter={handleHoverBackend}
            onMouseLeave={handleHoverBackend}
          >
            <h1 className="sm:text-2xl  md:text-5xl font-bold opacity-80 ">
              BackEnd
            </h1>
            <h1 className="md:absolute sm:hidden lg:block text-md font-normal pt-1  text-gray-600">
              I am a full-stack developer with strong skills
            </h1>
          </div>
        </Link>
      </div>

      <div className="lg:px-56 lg:py-40 m-auto flex justify-center ">
        <Work image="/logo/ecom.png" route="" description="e-commerce" name="Paxy" />
      </div>
    </div>
  );
}
