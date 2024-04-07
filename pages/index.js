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
      <div className="sm:px-3 lg:px-56 lg:py-5 md:flex md:justify-between bg-gray-50 shadow-md">
        <Link
          href="/skill/frontend"
          className="m-auto sm:hidden md:block"
          onMouseEnter={handleHoverFrontend}
          onMouseLeave={handleHoverFrontend}
        >
          <div className="w-[50%] frontend">
            <h1 className="sm:text-2xl  md:text-5xl font-bold opacity-80 ">
              FrontEnd
            </h1>
            <h1 className="md:absolute text-md font-normal z-20 pt-1 text-gray-600">
              I have average to average front-end skills.
              <br />
              Decorated can work according to needs very well.
            </h1>
          </div>
        </Link>

        <div className="flex justify-center ">
          <div className="flex justify-center text-center  ">
            <Image
              className={`relative  rounded-md z-10 transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                ${hoverFrontend ? "saturate-200 scale-105" : ""}
                `}
              src="/profile/bg_big.png"
              width={700}
              height={700}
            />
          </div>
        </div>

        <Link href="/skill/backend" className="m-auto sm:hidden md:block">
          <div
            className="w-[50%]"
            onMouseEnter={handleHoverBackend}
            onMouseLeave={handleHoverBackend}
          >
            <h1 className="sm:text-2xl  md:text-5xl font-bold opacity-80 ">
              BackEnd
            </h1>
            <h1 className="md:absolute sm:hidden md:block text-md font-normal pt-1  text-gray-600">
              I have average backend skills, able to work as required.
            </h1>
          </div>
        </Link>
      </div>

      <div className="hidden sm:block p-3 text-blue-600">
        <Link
          href="/skill/frontend"
          className="m-auto md:hidden"
          onMouseEnter={handleHoverFrontend}
          onMouseLeave={handleHoverFrontend}
        >
          <div className="mt-3 text-end">
            <h1 className="sm:text-2xl   font-bold opacity-80 ">
              FrontEnd
            </h1>
            <h1 className="md:absolute text-md  font-normal z-20 pt-1">
              I have average to average front-end skills.
              <br />
              Decorated can work according to needs very well.
            </h1>
          </div>
        </Link>

        <div className="relative sm:block border md:hidden border-gray-200 z-0 my-5" />

        <Link href="/skill/backend" className="m-auto md:hidden">
          <div
            onMouseEnter={handleHoverBackend}
            onMouseLeave={handleHoverBackend}
          >
            <h1 className="sm:text-2xl  md:text-5xl font-bold opacity-80 ">
              BackEnd
            </h1>
            <h1 className="md:absolute md:block text-md font-normal pt-1 ">
              I have average backend skills, able to work as required.
            </h1>
          </div>
        </Link>
        <div className="relative sm:block border border-gray-200 md:hidden z-0 my-5" />
      </div>

      <div className="lg:px-56 lg:py-40 sm:px-3 sm:py-10 m-auto ">
        <div className="relative sm:block border border-gray-200 z-0" />
        <div className="absolute sm:block lg:left-[43%]  lg:flex lg:justify-center mt-[-15px] z-20 bg-white px-10">
          <h1>SOME OF MY LATEST WORK</h1>
        </div>
        <div className="sm:block sm:mt-5 md:inline-block md:justify-center mt-5">
          {userData.map(project =>
            <Work
              id={project.id}
              // image="/logo/ecom.png"
              image={project.projectImage}
              route={project.projectRoute}
              description={project.projectDescription}
              name={project.projectName}
            />
          )}
        </div>
      </div>
    </div>
  );
}
