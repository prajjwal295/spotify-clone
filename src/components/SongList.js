import React, { useState } from "react";
import { useEffect } from "react";
import { MdPlayArrow } from "react-icons/Md";
// import { IoPauseCircleSharp } from "react-icons/Io";
import { setItem , setPlaying } from "../utils/UserSlice";

const SongList = ({ item , playSong}) => {
  // console.log(item);

  //   const [getSongs, setSongs] = useState([]);

  //   useEffect(() => {
  //     getPlaylistTracks();
  //   }, []);

  //   async function getPlaylistTracks() {
  //     const data = await fetch(tracks);
  //     const json = await data.json();

  //     setSongs(json);
  //   };

  // const playSong = (id) => {
  //   spotify
  //     .play({
  //       uris: [`spotify:track:${id}`],
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch(r.item);
  //         dispatch(true);
  //       });
  //     });
  // };

  return (
    <div
      className="flex ml-[20px] p-[10px] items-center z-20 text-white hover:cursor-pointer hover:bg-black/30 hover:opacity-[0.8]"
      onClick={() => playSong(item.id)}
    >
      <button>
        <MdPlayArrow className="mr-3 text-xl "/>
      </button>
      {/* <button>
        <IoPauseCircleSharp />
      </button> */}
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
