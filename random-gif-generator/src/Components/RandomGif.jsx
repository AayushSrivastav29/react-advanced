import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomGif = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [gifs, setGifs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchTrendingGifs() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
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

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

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
