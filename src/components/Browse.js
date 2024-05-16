import React, { useEffect } from "react";

import Header from "./Header";
import useNowPlayingVideos from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingVideos();
  const isGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {isGptSearch && <GptSearch />}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
