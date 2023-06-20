import React from "react";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistOptions from "./PlaylistOptions";
import { setPlaylists } from "../utils/UserSlice";
import { setPlaylistApi } from "../utils/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiLibrary } from "react-icons/Bi";
import { FiSearch } from "react-icons/Fi";
import { useState } from "react";

// const filterData = (searchInput, Playlists) => {
//   const result = Playlists.filter((playlist) =>
//     playlist.items.name.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return result;
// };

const SideNav = () => {
  const Playlists = useSelector((store) => store.cart.playlists);
  const [searchInput, setSearchInput] = useState("");
  const [filterredPlaylist, setFillterPlaylist] = useState();
  const dispatch = useDispatch();

  const handleApi = (track) => {
    dispatch(setPlaylistApi(track));
    console.log({ track });
  };

  return (
    <div className="  flex-[0.2] bg-[#040404] text-white p-[10px] min-w-[230px]">
      <div className=" bg-[#131313] flex flex-col rounded-lg ">
        <Link to="/Home">
          <SideBarOptions option="Home" Icon={HomeIcon} />
        </Link>
        <Link to="/Search">
          <SideBarOptions option="Search" Icon={SearchIcon} />
        </Link>
      </div>

      <div className="text-white flex flex-col bg-[#131313] mt-4 rounded-lg">
        <div className="mx-4 mt-4 flex items-center  ">
          <BiLibrary className="font-bold text-2xl mr-1" />
          <h1>Your Library</h1>
        </div>

        <div className="flex items-center justify-start m-4 mb-0">
          <button
            className=""
            // onClick={() => {
            //   const data = filterData(searchInput, Playlists?.items);
            //   setFillterPlaylist(data);
            // }}
          >
            <FiSearch className="text-lg mr-1 h-[25px]" />
          </button>

          <input
            type="placeholder"
            value={searchInput}
            placeholder="Search in your library"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            className=" bg-[rgb(42,44,63)] h-[25px] text-sm text-gray-200 pl-2"
          />
        </div>

        <div className="mt-4 m-4">
          {Playlists?.items?.map((item) => {
            // console.log(item);
            return (
              <Link
                to={`/playlist/${item.id}`}
                onClick={() => handleApi(item)}
                key={item.id}
              >
                <PlaylistOptions
                  key={item.id}
                  name={item.name}
                  image={item.images[0].url}
                  track={item.tracks.href}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
