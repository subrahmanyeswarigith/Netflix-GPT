import React from "react";

const GptSearchBar = () => {
  return (
    <div className="py-[25%] md:py-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          //   ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
          //   placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          //   onClick={handleGptSearchClick}
        >
          search
          {/* {lang[langKey].search} */}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
