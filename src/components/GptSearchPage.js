import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL}></img>
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
