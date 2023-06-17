import React from 'react'

const PlaylistSection = ({name , image}) => {
  return (
    <div className="flex text-white font-bold bg-black/50 items-center hover:bg-black/20 hover:transition-opacity-ease w-[350px] rounded-lg">
      <img src={image} className="h-[80px] w-auto mr-5 rounded-l-lg" />
      <h1>{name}</h1>
    </div>
  );
}

export default PlaylistSection