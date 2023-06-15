import React from "react";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistOptions from "./PlaylistOptions";
import { setPlaylists } from "../utils/UserSlice";
import { useSelector } from "react-redux";

const SideNav = () => {
  const Playlists = useSelector((store) => store.cart.playlists);

  return (
    <div className="border-2 h-[100vh] border-black flex-[0.2] bg-[#040404] text-white p-[10px] min-w-[230px]">
      <div className=" bg-[rgb(42,44,63)] flex flex-col">
        <SideBarOptions option="Home" Icon={HomeIcon} />
        <SideBarOptions option="Search" Icon={SearchIcon} />
      </div>
      <div className="text-white flex flex-col bg-[rgb(42,44,63)] h-full mt-4">
        <div className="m-4"> Your Library</div>
        <div className="flex m-4 justify-start">
          <buuton className="bg-black text-white mr-2">Playlists</buuton>
          <buuton className="bg-black text-white mr-2">Albums</buuton>
          <buuton className="bg-black text-white">Podcasts & Shows</buuton>
        </div>
        <div className="flex justify-between m-4 ">
          <button>Search</button>
          <h1>Recents</h1>
        </div>
        <div className="mt-4 m-4">
          {Playlists?.items?.map((item) => {
            console.log(item);
            return(<PlaylistOptions key={item.id} name={item.name} image={item.images[0].url}/>);
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
