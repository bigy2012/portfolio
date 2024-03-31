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
            <h1 className="md:absolute sm:hidden lg:block text-md font-normal z-50 pt-1 text-gray-600">
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
              className={` lg:block absolute sm:w-[80px] md:w-[180px] lg:w-[300px] sm:bottom-[435px] sm:right-[60%] 
              md:bottom-[550px] md:right-[61%] lg:bottom-[-150px] lg:right-[63%] xl:bottom-[-180px] xl:right-[63%] z-0 
              rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                    ${hoverFrontend ? "saturate-200 scale-105" : ""}
                    `}
              src="/bg/frontend.png"
              width={300}
              height={150}
            />
            <Image
              className={` lg:block absolute  sm:w-[80px] md:w-[180px] lg:w-[300px] sm:bottom-[435px] sm:right-[18%] 
              md:bottom-[550px] md:right-[15%] lg:bottom-[-150px] lg:right-[18%] xl:bottom-[-180px] xl:right-[18%] z-0 
              rounded-md transition duration-300 ease-in-out ${hoverBackend
                ? "grayscale scale-95"
                : ""}
                    ${hoverFrontend ? "saturate-200 scale-105" : ""}
                    `}
              src="/bg/backend.png"
              width={300}
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
        <div className="relative sm:hidden lg:block border border-gray-200 z-0" />
        <div className="absolute sm:hidden lg:block left-[43%] flex justify-center mt-[-15px] z-50 bg-white px-10">
          <h1>SOME OF MY LATEST WORK</h1>
        </div>
        <div className="sm:block sm:mt-5 lg:flex lg:justify-center mt-5">
          {userData.map(project =>
            <Work
              id={project.id}
              // image="/logo/ecom.png"
              image={project.projectImage}
              route={project.projectRoute + "/" + project.projectName}
              description={project.projectDescription}
              name={project.projectName}
            />
          )}
        </div>
      </div>
    </div>
  );
}
