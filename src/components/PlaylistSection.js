import React from "react";
import { useEffect, useState } from "react";

const PlaylistSection = ({ name, image, tracks }) => {
  console.log(tracks);

 const [track ,setTracks] = useState([]);
  // useeffect is very much important hook;
  useEffect(() => {
    getSongs();
  }, []);
  // Refer notes for better understandings!

  async function getSongs() {
    const data = await fetch(tracks.href);
    const json = await data.json();

    console.log(json);
    
  }

  return (
    <div className="flex text-white font-bold bg-black/50 items-center hover:bg-black/20 hover:transition-opacity-ease w-[350px] rounded-lg">
      <img src={image} className="h-[80px] w-auto mr-5 rounded-l-lg" />
      <h1>{name}</h1>
    </div>
  );
};

export default PlaylistSection;
