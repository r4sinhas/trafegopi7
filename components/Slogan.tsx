import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

export default function Slogan({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Traffic Monitorization", "Improve road safety", ""],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <div className="flex flex-col items-center justify-center text-center overflow-hidden text-5xl">
            <h6>
              <span>{text}</span>
              <Cursor />
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
