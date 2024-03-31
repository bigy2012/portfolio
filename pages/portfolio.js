import Image from "next/image";
import { Inter } from "next/font/google";
import Skill from "@/components/Skill";
import { useEffect, useState } from "react";
import Link from "next/link";
import Work from "@/components/Work";
import db from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FaceBook, GithubIcon } from "@/components/Icons";
const inter = Inter({ subsets: ["latin"] });

async function fetchContractFirebase() {
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

export default function Portfolio() {
  const [hoverBackend, setHoverBackend] = useState(false); // Track hover state
  const [hoverFrontend, setHoverFrontend] = useState(false); // Track hover state
  const handleHoverBackend = () => setHoverBackend(!hoverBackend);
  const handleHoverFrontend = () => setHoverFrontend(!hoverFrontend);

  let [userData, setUserdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchContractFirebase();
      setUserdata(data);
    }
    fetchData();
    console.log(userData);
  }, []);

  return (
    <div>
      <div className="sm:px-5 lg:px-56 lg:py-5 flex lg:justify-between bg-white shadow-lg z-50">
        <div className="w-[50%] m-auto text-center">
          <h1 className="sm:text-2xl  md:text-7xl font-bold opacity-80 ">
            Portfolio.
          </h1>
          <h1 className="sm:hidden lg:inline-block text-xl font-normal pt-3 text-gray-600">
            I used to work in a startup company. Product management company
            Including website and app design systems.
          </h1>
        </div>

        <div className="w-[50%] flex justify-center ">
          <div className="flex justify-center text-center  ">
            <Image
              className="relative rounded-md z-10 transition duration-300 ease-in-out"
              src="/profile/big.png"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>


      <div className="lg:px-56 lg:py-20 mb-40">
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
