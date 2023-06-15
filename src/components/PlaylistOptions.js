import React from "react";

const PlaylistOptions = ({ name , image }) => {
  return (
    <div className="flex items-center border-2">
        <img src={image} className="h-[60px] w-auto mr-5"/>
      <h1>{name}</h1>
    </div>
  );
};

export default PlaylistOptions;
