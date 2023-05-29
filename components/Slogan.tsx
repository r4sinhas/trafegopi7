import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Slogan({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Traffic Monitorization", "Improve road safety", ""],
    loop: true,
    delaySpeed: 1000,
  });

  const videoId = "dLF7BGfC1pA"; // Replace with the extracted video ID

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <div className="flex flex-col items-center justify-center text-center overflow-hidden text-5xl mt-24">
            <iframe
              width="1080"
              height="600"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
