import React, { useState } from "react";
import { useEffect } from "react";

const SongList = ({ item , playSong}) => {
  console.log(item);

  //   const [getSongs, setSongs] = useState([]);

  //   useEffect(() => {
  //     getPlaylistTracks();
  //   }, []);

  //   async function getPlaylistTracks() {
  //     const data = await fetch(tracks);
  //     const json = await data.json();

  //     setSongs(json);
  //   };

  return (
    <div
      className="flex ml-[20px] p-[10px] items-center z-20 text-white hover:cursor-pointer hover:bg-black/30 hover:opacity-[0.8]"
      onClick={() => playSong(item.id)}
    >
      <img src={item?.album?.images[0]?.url} alt="logo" className="h-[40px]" />
      <div className="ml-4">
        <h1 className="text-[16px]">{item?.name}</h1>
        <p className="text-[14px] mt-[3px] text-gray-500">
          {item?.artists?.map((artist) => artist.name).join(", ")}
          {item?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default SongList;
