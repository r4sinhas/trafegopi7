import { motion } from "framer-motion";
import React from "react";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scwcontent.affino.com/AcuCustom/Sitename/DAM/031/Continental3_Intelligent_Intersection_smart_cities_PR_rt.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[500px] xl:h-[300px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <p className=" text-18">
          Under the Aveiro Tech City Living Lab initiative <></>
          <a
            href="https://aveiro-living-lab.it.pt"
            className="link"
            target="_blank"
          >
            https://aveiro-living-lab.it.pt
          </a>
          , the city of Aveiro assumed itself as a living laboratory. This lab
          consists of stations with various communication technologies in 44
          locations in the city of Aveiro (4G/5G, vehicle communication and
          infrastructure – IEEE 802.11p, C-V2X, LoRa and LoRaWAN long range
          communication, and Wi-Fi), and interconnected by fiber. These stations
          are installed on Smart Lampposts and buildings in the city, it also
          contains environmental sensors, radars, LIDARs, video cameras and
          computational edge units. This infrastructure is connected to the
          datacenter at the Instituto de Telecomunicações, with computational
          units and data aggregation at the edge and in the cloud. More
          information about this is available on the infrastructure website{" "}
          <></>
          <a
            href="https://www.it.pt/News/NewsPost/4650"
            className="link"
            target="_blank"
          >
            https://www.it.pt/News/NewsPost/4650
          </a>
          , and in the publication{" "}
          <a
            href="https://arxiv.org/abs/2207.12200"
            className="link"
            target="_blank"
          >
            https://arxiv.org/abs/2207.12200
          </a>
          .
        </p>
      </div>
    </div>
  );
}
