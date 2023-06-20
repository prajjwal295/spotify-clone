import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylistApi } from "../utils/UserSlice";

const PlaylistSection = ({ name, image , key}) => {

  return (
    <div className="flex text-white font-bold bg-black/50 items-center hover:bg-black/20 hover:transition-opacity-ease w-[350px] rounded-lg" key={key}>
      <img src={image} className="h-[80px] w-auto mr-5 rounded-l-lg" />
      <h1>{name}</h1>
    </div>
  );
}


export default PlaylistSection;
