import React from "react";
type Props = {};

export default function Architecture({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
          &nbsp;Architecture
      </h3>
      <div className="hero-content flex-col lg:flex-row pt-44">
        <img
          src="https://i.ibb.co/tzwRWRb/Archt-Diagram-drawio.png"
          className=""
        />
      </div>
    </div>
  );
}
