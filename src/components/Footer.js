import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
// import { BsFillPauseCircleFill } from "react-icons/Bs";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useSelector } from "react-redux";

const Footer = () => {

  const item = useSelector((store)=>store.cart.item);
  console.log({item});
  const playing = useSelector((store) => store.cart.playing);
  
  return (
    <div className="fixed bottom-0 h-[10vh] text-white w-full items-center border-2 rounded-lg rounded-b-none  bg-black p-[20px]  flex justify-between ">
      <div className="flex-[0.3] flex items-center w-[300px]">
        <img
          src={item?.album?.images[0]?.url}
          alt="album name"
          className="w-[50px] mr-4 object-contain "
        />
        <div>
          <h2 className="text-sm">{item?.name}</h2>
          <h3 className="text-xs text-gray-600">
            {item?.artists?.map((artist) => artist.name).join(", ")}
            {item?.album?.name}
          </h3>
        </div>
      </div>

      <div className="text-white flex flex-col flex-[0.4] items-center  justify-between px-[100px] py-0  max-w-[500px] h-10">
        <div className="flex justify-between items-center  min-w-[300px] ">
          <ShuffleIcon className="text-[#1ed15e]" />
          <SkipPreviousIcon />
          {!playing ? (
            <PlayCircleOutlineOutlinedIcon fontSize="large" />
          ) : (
            <PauseCircleOutlineOutlinedIcon fontSize="large" />
          )}

          <SkipNextIcon />
          <RepeatIcon className="text-[#1ed15e]" />
        </div>

        <Slider
          color="primary"
          defaultValue={50}
          aria-label="default"
          valueLabelDisplay="default"
          className=" min-w-400px text-white "
        />
      </div>

      <div className="flex-[0.3] items-center flex justify-end">
        <VolumeUpIcon className="mx-2" />
        <Slider color="primary" className="max-w-[100px] text-white " />
      </div>
    </div>
  );
};

export default Footer;
