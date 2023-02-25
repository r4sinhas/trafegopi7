import { motion } from "framer-motion";
import React from "react";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[500px] xl:h-[300px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h5 className="text-3xl font-semibold" style={{ fontSize: 20 }}>
          {" "}
          Here is some info about the project!
        </h5>
        <p className="text-sm">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          explicabo officia quam quod dicta minus similique nulla excepturi
          cupiditate perspiciatis, reprehenderit dignissimos blanditiis ut,
          laboriosam, maiores provident consectetur facilis. Illo.
        </p>
      </div>
    </div>
  );
}
