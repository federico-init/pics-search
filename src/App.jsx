import { useState } from "react";

import searchImages from "./api";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (searchInput) => {
    const res = await searchImages(searchInput);

    setImages(res);
    setHasSearched(true);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 ? (
        <ImageList images={images} />
      ) : (
        hasSearched && <p>No images found. Please try another search.</p>
      )}
    </div>
  );
}

export default App;
