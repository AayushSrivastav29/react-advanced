import React, { useState, useEffect } from "react";
import axios from "axios";

const useGif = (tag) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;

  async function fetchTrendingGifs() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(tag ? tagMemeUrl : randomUrl);
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

  return { gifs, loading, error, fetchTrendingGifs };
};

export default useGif;
