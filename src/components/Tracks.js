import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/Md";
import { FiMoreHorizontal } from "react-icons/Fi";
import SongList from './SongList';
import { useSelector } from 'react-redux';
import usePlaylists from '../utils/usePlaylists';

const Tracks = () => {

    
const track = usePlaylists();
console.log(track);

const playlist = useSelector((store) => store.cart.playlistsApi);

  return (
    <div className=" h-[90vh] flex-[0.8] bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgb(91,87,115)] overflow-y-scroll rounded-lg m-2 ml-0">
      <div className="flex m-8">
        <img
          src={playlist?.images[0]?.url}
          alt="logo"
          className="h-[230px] shadow-2xl"
        />
        <div className="flex flex-col ml-4 justify-end">
          <strong>
            <h1 className="text-white font-bold">Playlist</h1>
          </strong>
          <h1 className="text-white text-[90px] font-bold">{playlist?.name}</h1>
          <h1 className="text-gray-200 text-xs">{playlist?.owner.display_name}</h1>
        </div>
      </div>

      <hr className="mx-6 text-gray-500 " />
      <div className="m-8 flex items-center">
        <AiFillPlayCircle className="text-[#1ed15e] mr-4 text-[60px]" />
        <MdFavoriteBorder className="text-white mr-4 text-[40px]" />
        <FiMoreHorizontal className="text-white text-[50px]" />
      </div>
      <div className="mt-4 m-4 ">
        {track?.items?.map((item) => {
          // console.log(item);
          return (
            <SongList
              //   playSong={playSong}
              key={item?.track?.id}
              item={item?.track}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tracks;