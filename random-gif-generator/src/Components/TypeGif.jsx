import React, { useState } from "react";
import axios from "axios";

const TypeGif = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [tag, setTag] = useState("cat");
  const [gifs, setGifs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchSearchedGifs() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`
      );
      console.log(response.data.data);
      setGifs(response.data.data.images.original.url);
    } catch (err) {
      console.error("Error fetching the GIFs:", err);
      setError("Failed to fetch GIFs. Try again later.");
    } finally {
      setLoading(false);
    }
  }

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
          onClick={fetchSearchedGifs}
        >
          SearchGif
        </button>
      </div>
    </div>
  );
};

export default TypeGif;
