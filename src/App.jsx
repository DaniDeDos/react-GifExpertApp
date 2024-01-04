import React, { useState } from "react";

import Header from "./components/Header";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const [categoria, setCategoria] = useState([""]);

  return (
    <>
      <Header />
      <AddCategory setCategoria={setCategoria} />
      <hr />
      <ol>
        {categoria.map((category) => (
          <GifGrid key={category} categoria={category} />
        ))}
      </ol>
    </>
  );
}

export default App;
