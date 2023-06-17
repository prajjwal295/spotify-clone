import React, { useState } from "react";
import { useEffect } from "react";

const SongList = ({ tracks }) => {
    console.log(tracks)
  const [getSongs, setSongs] = useState([]);

//   useEffect(() => {
//     getPlaylistTracks();
//   }, []);

//   async function getPlaylistTracks() {
//     const data = await fetch(tracks);
//     const json = await data.json();

//     setSongs(json);
//   };

  return <div>SongList</div>;
};

export default SongList;
