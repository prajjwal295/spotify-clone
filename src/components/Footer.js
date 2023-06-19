import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-[10vh] text-white w-full  border-black bg-black p-[20px] flex justify-between mb-[5px]">


      <div className="flex-[0.3] flex items-center w-[300px]">
        <img
          src="https://img.freepik.com/free-vector/stay-home-safe-poster-design_1017-25063.jpg?w=2000"
          alt="album name"
          className="w-[60px] mr-4 object-contain "
        />
        <div>
          <h2>Name</h2>
          <h3>Arijit Singh</h3>
        </div>
      </div>

      <div className="text-white flex flex-col flex-[0.4] items-center  justify-between px-[100px] py-0  max-w-[500px] h-10">
        <div className="flex justify-between items-center  min-w-[300px] ">
          <ShuffleIcon className="text-[#1ed15e]" />
          <SkipPreviousIcon />
          <PlayCircleOutlineOutlinedIcon fontSize="large" />
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
