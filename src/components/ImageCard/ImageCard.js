import React from "react";

const ImageCard = ({ item }) => {
  return (
    <img
      style={{
        height: item.images.downsized_still.height,
        width: item.images.downsized_still.width,
        // height: "50vh",
        // width: "45vw",
        margin: "2vh 1vw",
        borderRadius: "8px",
      }}
      src={item.images.downsized_still.url}
      alt=""
    />
  );
};

export default ImageCard;
