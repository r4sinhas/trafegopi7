import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 cursor-pointer flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center p-5"
      >
        <Link href="#Home">
          <button
            style={{ backgroundColor: "transparent", fontSize: 25 }}
            className="btn btn-ghost"
          >
            Safe Roads
          </button>
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
        <Link href="https://github.com/PI10trafego7" target="_blank">
          <button className="btn btn-ghost">Git Repository</button>
        </Link>
      </motion.div>
    </header>
  );
}
