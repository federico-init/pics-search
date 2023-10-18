import ImageShow from "./ImageShow";

import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return (
    <div className="ImageList">
      {images.length ? (
        renderedImages
      ) : (
        <p className="noResults">
          Sorry, we couldn't find any results.
          <br /> Try another search.
        </p>
      )}
    </div>
  );
}

export default ImageList;
