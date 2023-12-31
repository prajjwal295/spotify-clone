import React from "react";

const PlaylistOptions = ({ name , image , key }) => {
  return (
    <div className="flex items-center justify-start hover:bg-black/70" key={key}>
      <img src={image} className="h-[60px] w-auto  p-2 rounded-lg" />
      <h1 className="text-sm font-semibold text-gray-100">{name}</h1>
    </div>
  );
};

export default PlaylistOptions;
