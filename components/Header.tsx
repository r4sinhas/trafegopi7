import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 cursor-pointer flex items-start justify-between mx-auto z-20 xl:items-center max-h-24 pr-20 pl-20 bg-slate-700"
      style={{width: "100%" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center p-5"
      >
        <Link href="#Home">

            <img  
            src="images/Logo.png"
            alt="Pedro"
            className="rounded-xl"
            style={{ width: 100, height: 100 }}
            />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center p-5 text-gray-300 justify-between cursor-pointer"
      >
        <Link href="#About">
          <button className="btn btn-ghost">About</button>
        </Link>
        <Link href="#Architecture">
          <button className="btn btn-ghost">Architecture</button>
        </Link>
        <Link href="#Calendar">
          <button className="btn btn-ghost">Calendar</button>
        </Link>
        <Link href="#Documentation">
          <button className="btn btn-ghost">Documentation</button>
        </Link>
        <Link href="#Team">
          <button className="btn btn-ghost">Team</button>
        </Link>
        <Link href="https://github.com/ATCLL-Safe-Roads" target="_blank">
          <button className="btn btn-ghost">Git Repository</button>
        </Link>
      </motion.div>
    </header>
  );
}
