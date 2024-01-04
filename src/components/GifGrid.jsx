import React, { useState, useEffect } from "react";

const GifGrid = ({ categoria }) => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    if (categoria) {
      const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=2&api_key=xkx3cpPbTILcTM4UmkrqTa6VSZgbbPt7`;
      const resp = await fetch(url);
      const data = await resp.json();
      setGifs(data.data);
    }
  };

  useEffect(() => {
    getGifs();
  }, [categoria]);

  return (
    <div>
      <h3>{categoria}</h3>
      <div className="gif-grid">
        {gifs.map((gif) => (
          <img
            className="gif"
            key={gif.id}
            src={gif.images.downsized_medium.url}
            alt={gif.title}
          />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
