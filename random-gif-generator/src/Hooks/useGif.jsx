import React from 'react';

const useGif = () => {
    
    const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  async function fetchTrendingGifs() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
      );
      const resArray = response.data.data;

    //  console.log(resArray[0].images.original.url);
      setGifs(resArray[ Math.floor(Math.random()*resArray.length) ].url);

    } catch (err) {
      console.error("Error fetching the GIFs:", err);
      setError("Failed to fetch GIFs. Try again later.");
    } finally {
      setLoading(false);
    }
  }


    return (gifs, error, fetchTrendingGifs);
};

export default useGif;