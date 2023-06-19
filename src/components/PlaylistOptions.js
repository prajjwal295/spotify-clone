import React from "react";

const PlaylistOptions = ({ name , image }) => {
  return (
    <div className="flex items-center justify-start">
      <img src={image} className="h-[60px] w-auto  p-2 rounded-lg" />
      <h1 className="text-sm font-semibold text-gray-100">{name}</h1>
    </div>
  );
};

export default PlaylistOptions;
