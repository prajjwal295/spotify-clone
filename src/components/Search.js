import SongList from "./SongList";
import SpotifyWebApi from "spotify-web-api-js";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/Md";
import { FiMoreHorizontal } from "react-icons/Fi";
import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { setPlaying ,setItem} from "../utils/UserSlice";
import Header from "./Header";

const Search = () => {
  const discover = useSelector((store) => store.cart.discover_weekly);


  const dispatch = useDispatch();

  const spotify = new SpotifyWebApi();

  
const playSong = (id) => {
  console.log("playSong function started"); // Debug statement

  spotify
    .play({
      uris: [`spotify:track:${id}`],
    })
    .then((res) => {
      console.log("Play API response:", res); // Debug statement

      spotify.getMyCurrentPlayingTrack().then((r) => {
        console.log("getMyCurrentPlayingTrack response:", r); // Debug statement

        dispatch(setItem(r.item));
        console.log("setItem dispatched"); // Debug statement

        dispatch(setPlaying(true));
        console.log("setPlaying dispatched"); // Debug statement
      });
    });
};

  return (
    <div className=" h-[90vh] flex-[0.8] bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgb(91,87,115)] overflow-y-scroll rounded-lg m-2 ml-0">
      <Header />
      <div className="flex m-8">
        <img
          src={discover?.images[0]?.url}
          alt="logo"
          className="h-[230px] shadow-2xl"
        />
        <div className="flex flex-col ml-4 justify-end">
          <strong>
            <h1 className="text-white font-bold">Playlist</h1>
          </strong>
          <h1 className="text-white text-[90px] font-bold">{discover?.name}</h1>
          <h1 className="text-gray-200 text-xs">{discover?.description}</h1>
        </div>
      </div>

      <hr className="mx-6 text-gray-500 " />

      <div className="m-8 flex items-center">
        <AiFillPlayCircle className="text-[#1ed15e] mr-4 text-[60px]" />
        <MdFavoriteBorder className="text-white mr-4 text-[40px]" />
        <FiMoreHorizontal className="text-white text-[50px]" />
      </div>

      <div className="mt-4 m-4 ">
        {discover?.tracks?.items?.map((item) => {
          // console.log(item);
          return (
            <SongList
              playSong={playSong}
              key={item?.track?.id}
              item={item?.track}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
