import React from "react";
import play from "../assets/play.png";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] w-screen aspect-video h-screen  px-24 absolute bg-gradient-to-r from-black">
      <div>
        <div className="text-6xl font-bold text-white w-1/3">{title}</div>
        <div className="w-1/3 py-6 text-lg text-white">{overview}</div>
        <div className="flex gap-3 items-center">
          <button className="bg-white px-10 py-2 text-lg text-black  flex gap-2 rounded-md hover:bg-opacity-90">
            <img alt="play" className="h-6 w-6 pt-1" src={play}></img>
            Play
          </button>
          <button className="bg-gray-500 px-10 py-2 text-lg text-white bg-opacity-50 flex gap-2 rounded-md">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
