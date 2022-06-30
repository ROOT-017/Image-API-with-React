import './ImageList.css';
import React from "react";
import ImageCard from './imageCard';

const ImageList = (props) => {  //props is an object
  const images = props.images.map((image) => {
    return (<ImageCard key={image.id} image={image} />);  //key is a unique identifier for each image
    
  });
  return <div className="image-list">{images}</div>;  //returns a JSX object
};
export default ImageList;
