import ImageShow from "./ImageShow";

import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return <div className="ImageList">{renderedImages}</div>;
}

export default ImageList;
