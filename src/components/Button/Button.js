import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button className="heroSection_loadMore-button" onClick={handleClick}>
      Load More Items...
    </button>
  );
};

export default Button;
