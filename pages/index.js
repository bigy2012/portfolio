import Image from "next/image";
import { Inter } from "next/font/google";
import Skill from "@/components/Skill";
import { useEffect, useState } from "react";
import Link from "next/link";
import Work from "@/components/Work";
import db from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const inter = Inter({ subsets: ["latin"] });

async function fetchProjectsFromFirebase() {
  const querySnapshot = await getDocs(collection(db, "projects"));

  let data = [];
  querySnapshot.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return data;
}

export default function Home() {
  const [hoverBackend, setHoverBackend] = useState(false); // Track hover state
  const [hoverFrontend, setHoverFrontend] = useState(false); // Track hover state
  const handleHoverBackend = () => setHoverBackend(!hoverBackend);
  const handleHoverFrontend = () => setHoverFrontend(!hoverFrontend);

  let [userData, setUserdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProjectsFromFirebase();
      setUserdata(data);
    }
    fetchData();
    console.log(userData);
  }, []);

  return (
    <div>
      <div className="sm:px-3 lg:px-56 lg:py-5 flex lg:justify-between bg-gray-50 shadow-md">
        <Link
          href="/skill/frontend"
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

        <Link href="/skill/backend" className="m-auto">
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

      <div className="lg:px-56 lg:py-40 m-auto ">
        <div className="relative border border-gray-200 z-0" />
        <div className="absolute left-[43%] flex justify-center mt-[-15px] z-50 bg-white px-10">
          <h1>SOME OF MY LATEST WORK</h1>
        </div>
        <div className="flex justify-center mt-5">
          {userData.map(project =>
            <Work
              id={project.id}
              // image="/logo/ecom.png"
              image={project.projectImage}
              route={project.projectRoute + '/' + project.projectName}
              description={project.projectDescription}
              name={project.projectName}
            />
          )}
        </div>
      </div>
    </div>
  );
}
