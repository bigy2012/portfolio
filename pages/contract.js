import Image from "next/image";
import { Inter } from "next/font/google";
import Skill from "@/components/Skill";
import { useEffect, useState } from "react";
import Link from "next/link";
import Work from "@/components/Work";
import db from "../components/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FaceBook, GithubIcon, Line } from "@/components/Icons";
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

export default function Contract() {
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
            Contract
          </h1>
          <h1 className="sm:hidden lg:inline-block text-xl font-normal pt-3 text-gray-600">
            Get in touch with me via social media or email.
          </h1>

          <div className="mt-10">
            <div className="inline-block font-bold">
              <Link target={"_blank"} href="https://github.com/bigy2012" className="w-[50px] inline-block mx-10">
                <GithubIcon className="w-[50px] inline-block" /> Github
              </Link>
            </div>
            <div className="inline-block font-bold">
              <Link
                target={"_blank"}
                className="w-[50px] inline-block mx-10"
                href="https://www.facebook.com/wasaniy121A/"
              >
                <FaceBook className="w-[50px] inline-block" /> FaceBook
              </Link>
            </div>
            <div className="inline-block font-bold">
              <Link target={"_blank"} href="https://line.me/ti/p/X3CLZeSGw9" className="w-[50px] inline-block mx-10">
                <Line className="w-[50px] inline-block" /> Line
              </Link>
            </div>
          </div>
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

      <div className="sm:px-5 sm:mt-5 lg:px-56 lg:py-10 bg-gray-50 z-0">
        <form method="POST">
          <h1 className="sm:text-2xl  md:text-4xl font-medium opacity-80 ">
            Send me an email
          </h1>
          <div className="mt-5 w-[100%]">
            <h1>Name</h1>
            <input
              type="text"
              className="border sm:w-[100%] lg:w-[100%] p-2 text-black"
              name="full_name"
            />
          </div>
          <div className="mt-5 w-[100%]">
            <h1>Email</h1>
            <input
              type="email"
              className="border sm:w-[100%] lg:w-[100%]  p-2 text-black"
              name="email"
            />
          </div>
          <div className="mt-5">
            <h1>Message</h1>
            <textarea
              name="message"
              className="border sm:w-[100%] lg:w-[100%]  p-2 text-black"
            />
          </div>
          <div className="mt-5 sm:flex sm:justify-center lg:block">
            <button
              type="submit"
              className="bg-black text-white font-bold border p-4 rounded-lg"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
