import React from "react";

type Props = {};

export default function Documentation({}: Props) {
  return (
    <div>
      <div className="h-screen relative max-w-7xl pt-48 flex flex-col mx-auto justify-evenly items-center text-center md:text-left md:flex-row">
        <div className="h-screen relative max-w-7xl pt-48 flex flex-col mx-auto justify-evenly items-center text-center t md:flex-row">
          <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl">
            &nbsp;Documentation
          </h3>
          <div
            className="grid grid-cols-2 gap-16"
            style={{ marginBottom: "8rem" }}
          >
            <div className="flex flex-col justify-center gap-6">
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a
                  href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Presentations/M1%20-%20Inception%20Presentation.pdf?raw=true"
                  target="_blank"
                >
                  M1 - Inception Presentation
                </a>
              </button>
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a
                  href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Presentations/M2%20-%20Elaboration%20Presentation.pdf?raw=true"
                  target="_blank"
                >
                  M2 - Elaboration Presentation
                </a>
              </button>
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a
                  href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Presentations/M3%20-%20Construction%20Presentation.pdf?raw=true"
                  target="_blank"
                >
                  M3 - Construction Presentation
                </a>
              </button>
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a href="#Documentation">M4 - Transition Presentation</a>
              </button>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a
                  href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/Technical%20Report.pdf?raw=true"
                  target="_blank"
                >
                  Technical Report
                </a>
              </button>
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a
                  href="https://github.com/ATCLL-Safe-Roads/Documents/blob/1062c214638701b137ddcd8b5c82b6a1dfa1f81f/LEI_PI_Grupo-7.pdf?raw=true"
                  target="_blank"
                >
                  Poster - Students@DETI
                </a>
              </button>
              <button
                style={{ fontSize: 20, padding: "1rem" }}
                className="btn btn-ghost"
              >
                <a
                  href="https://github.com/ATCLL-Safe-Roads/Documents/blob/main/IEEE_Abstract.pdf?raw=true"
                  target="_blank"
                >
                  IEE - Abstract
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
