import React from "react";
import Header from "./Header";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import PlaylistSection from "./PlaylistSection";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import usePlaylists from "../utils/usePlaylists";
import { setPlaylistApi } from "../utils/UserSlice";

const Body = () => {

  const Playlists = useSelector((store) => store.cart.playlists);
  // console.log(Playlists);

   const dispatch = useDispatch();

  //  useEffect(() => {
  //    dispatch(setPlaylistApi(null));
  //  }, []);

    const handleApi = (track) => {
       dispatch(setPlaylistApi(track));
       console.log({ track });
     };

  return (
    <div className=" h-[90vh] flex-[0.8] bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgb(91,87,115)] overflow-y-scroll rounded-lg m-2 ml-0">
      <Header />
      <div className="mt-4 m-4 grid grid-cols-3  gap-x-[25px] gap-y-[15px]">
        {Playlists?.items?.map((item) => {
          // console.log(item);
          return (
            <Link
              to={`/playlist/${item.id}`}
              onClick={() => handleApi(item)}
              key={item.id}
            >
              <PlaylistSection
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
  );
};

export default Body;
