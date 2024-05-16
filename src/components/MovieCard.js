import React from "react";
import { IMG_CDN_IRL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img alt="Movie Card" src={IMG_CDN_IRL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
