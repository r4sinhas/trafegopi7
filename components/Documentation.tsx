import React from "react";
type Props = {};

export default function Documentation({}: Props) {
  return (
    <div>
      <div className="h-screen relative max-w-7xl pt-48 flex flex-col mx-auto justify-evenly items-center text-center  t md:flex-row">
        <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl">
          Documentation
        </h3>
        <button style={{ fontSize: 20 }} className="btn btn-ghost">
          <a
            href="https://github.com/PI10trafego7/Documents/blob/main/Presentations/Milestone%20One%20-%20Inception.pdf?raw=true"
            target="_blank"
          >
            First Presentation
          </a>
        </button>
      </div>
    </div>
  );
}
