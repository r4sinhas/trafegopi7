import { motion } from "framer-motion";
import React from "react";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        &nbsp;About
      </h3>
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scwcontent.affino.com/AcuCustom/Sitename/DAM/031/Continental3_Intelligent_Intersection_smart_cities_PR_rt.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[500px] xl:h-[300px]"
      />
      <div className="px-0 md:px-10 space-y-20">
        <p className="text-18 space-y-20">
          Nowadays, the idea of having a modern inter-connected city is getting
          stronger with the growth of Wireless Fidelity (Wi-Fi) connected
          devices and the evolution of IoT. Taking this into consideration, it
          was proposed the assignment to develop a traffic management and road
          safety platform, that analyses and processes real-time data, to report
          different types of events based on statistics and previous behaviour
          by certain city zones. This work takes the use of machine learning
          (ML) models that are trained with access to historical data, to data
          processing and do forecasting. Additionally, the work aims to explore
          the analysis of unusual periods in the city, using correlations
          between traffic congestion, weather data, and road conditions, and
          still extends a visual model to detect potholes. Our approach will
          break the work into two parts (frontend and backend), as well as a
          cyberphysics structure. This will allow us to process the data, reach
          our desired results and display them in a simple and intuitive manner.
        </p>
      </div>
    </div>
  );
}
