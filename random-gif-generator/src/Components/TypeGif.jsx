import React, { useState } from "react";
import useGif from "../Hooks/useGif";

const TypeGif = () => {
  const [tag, setTag] = useState("cat");

  const { gifs, loading, error, fetchTrendingGifs } = useGif(tag);

  return (
    <div className="flex flex-col justify-between bg-blue-500 items-center w-1/3 h-1/3">
      <h1>Search {tag} Gif</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img className="w-[75%] h-[75%]" src={gifs} alt="meme" />
      )}
      {error && <p>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Type gif"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button
          className="m-1 bg-green-700 text-white"
          onClick={fetchTrendingGifs}
        >
          SearchGif
        </button>
      </div>
    </div>
  );
};

export default TypeGif;
