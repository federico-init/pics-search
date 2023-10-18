import { useState } from "react";

import searchImages from "./api";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchInput) => {
    const res = await searchImages(searchInput);

    setImages(res);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
