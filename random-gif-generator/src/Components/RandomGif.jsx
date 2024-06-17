import React, { useEffect, useState } from "react";
import axios from "axios";
import useGif from "../Hooks/useGif";

const RandomGif = () => {
  const { gifs, loading, error, fetchTrendingGifs } = useGif();

  return (
    <div className="flex flex-col justify-between bg-green-400 items-center w-1/3 h-1/3">
      <h1>Trending Gifs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img className="w-[75%] h-[75%]" src={gifs} alt="meme" />
      )}
      {error && <p>{error}</p>}
      <button
        className="mb-1 bg-green-700 text-white"
        onClick={fetchTrendingGifs}
      >
        Generate Random
      </button>
    </div>
  );
};

export default RandomGif;
