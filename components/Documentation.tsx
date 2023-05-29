import React from "react";
type Props = {};

export default function Documentation({}: Props) {
  return (
    <div>
      <div className="h-screen  relative max-w-7xl pt-48 flex flex-col mx-auto justify-evenly items-center text-center md:text-left md:flex-row">
        <div className="h-screen relative max-w-7xl pt-48 flex flex-col mx-auto justify-evenly items-center text-center  t md:flex-row">
          <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl">
            &nbsp;Documentation
          </h3>
          <button style={{ fontSize: 20 }} className="btn btn-ghost">
            <a
              href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Presentations/M1%20-%20Inception%20Presentation.pdf?raw=true"
              target="_blank"
            >
              M1 - Inception Presentation
            </a>
          </button>
          <button style={{ fontSize: 20 }} className="btn btn-ghost">
            <a
              href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Presentations/M2%20-%20Elaboration%20Presentation.pdf?raw=true"
              target="_blank"
            >
              M2 - Elaboration Presentation
            </a>
          </button>
          <button style={{ fontSize: 20 }} className="btn btn-ghost">
            <a
              href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Presentations/M3%20-%20Construction%20Presentation.pdf?raw=true"
              target="_blank"
            >
              M3 - Construction Presentation
            </a>
          </button>
          <button style={{ fontSize: 20 }} className="btn btn-ghost">
            <a
              href="https://github.com/ATCLL-Safe-Roads/Documents/blob/1062c214638701b137ddcd8b5c82b6a1dfa1f81f/LEI_PI_Grupo-7.pdf?raw=true"
              target="_blank"
            >
              Poster - Students@DETI
            </a>
          </button>
          
        </div>
      </div>
    </div>
  );
}
