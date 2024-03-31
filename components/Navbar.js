import Link from "next/link";
import { GithubIcon, MoonIcon, SunIcon, FaceBook } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hook/useThemeSwitcher";
import React, { useState, useRef } from "react";

export default function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = event => {
    // Close menu only if clicked outside the menu itself
    setIsOpen(false);
  };

  return (
    <div className="sm:px-3 lg:px-56 lg:py-3  text-dark">
      <div className="flex justify-between ">
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={handleClick}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="/"
            className="text-md font-medium mr-3 hover:text-green-400 hover:border-b-2 hover:border-green-400 hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-md font-medium mx-3 hover:text-green-400  hover:border-b-2 hover:border-green-400 hover:scale-105"
          >
            Portfolio
          </Link>
          <Link
            href="/contract"
            className="text-md font-medium mx-3 hover:text-green-400  hover:border-b-2 hover:border-green-400 hover:scale-105"
          >
            Contract
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold hover:text-green-400 hover:scale-105">Bigy</h1>
        </div>
        <div className="flex items-center justify-end  flex-wrap ">
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
        </div>
      </div>

      <div
        className={`navbar-menu relative z-50  navbar-menu ${isOpen
          ? ""
          : "hidden"}`}
        ref={menuRef}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close" onClick={handleClose}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  href="/"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/work"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={handleClose}
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
