import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PlaylistSection = ({ name, image, tracks }) => {

  

//  const [track ,setTracks] = useState([]);
//   // useeffect is very much important hook;
//   useEffect(() => {
//     getSongs();
//   }, []);
//   // Refer notes for better understandings!

//  async function getSongs() {
//    console.log("getSongs function started"); // Debug statement

//    try {
//      const data = await fetch(tracks.href, {
//        headers: {
//          Authorization:
//            "BQBv69Q5ZhtRdfsEe71h-q1-bY8-_RmWu8Au67zFys1Wmwko2gvxsUeBvNklfU7zbHU_LRRe4paUY4lBeWvdYN51vW0InksDtUG_5__T9aJ-HvhWVc7MP1S0YFfHljztK5l27VfogSu8uTQCG_9je0EF2bs1nheUU-znbW9XrgUHl4vOeltxfn5PeWxEEqvKL1N1zQto0GyXvqyHJVgPqVIB",
//        },
//      });

//      console.log("Data:", data); // Debug statement

//      const json = await data.json();

//      console.log("JSON:", json); // Debug statement
//    } catch (error) {
//      console.error(error);
//      // Handle any errors here
//    }
//  }




  return (
    <div className="flex text-white font-bold bg-black/50 items-center hover:bg-black/20 hover:transition-opacity-ease w-[350px] rounded-lg">
      <img src={image} className="h-[80px] w-auto mr-5 rounded-l-lg" />
      <h1>{name}</h1>
    </div>
  );
};

export default PlaylistSection;
