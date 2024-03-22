import Link from "next/link";
import { GithubIcon, MoonIcon, SunIcon, FaceBook } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from './hook/useThemeSwitcher'

export default function Navbar() {
    const [mode, setMode] = useThemeSwitcher();

  return (
    <div className="lg:px-56 lg:py-3  text-white">
      <div className="lg:flex lg:justify-between">
        <div>
          <Link href="/" className="text-md mx-3 hover:border-b-2">
            Home
          </Link>
          <Link href="/about" className="text-md mx-3 hover:border-b-2">
            About
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
        <div className="flex items-center justify-end  flex-wrap">
          <motion.a
            href="https://github.com/bigy2012"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/wasaniy121A/"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <FaceBook />
          </motion.a>
          {/* <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`rounded-full p-1 w-[35px] ${mode === "light"
              ? "bg-dark text-light"
              : "bg-light text-dark"}`}
          >
            {mode === "dark"
              ? <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />}
          </button> */}
        </div>
      </div>
    </div>
  );
}
