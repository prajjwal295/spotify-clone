import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

const usePlaylists = () => {

  const track = useSelector((store) => store.cart.playlistsApi);
    const token = useSelector((store)=>store.cart.token);
  // console.log({track})
  const [tracks, setTracks] = useState([]);
  // useeffect is very much important hook;
  useEffect(() => {
    getSongs();
  }, []);
  // Refer notes for better understandings!

  async function getSongs() {
    // console.log("getSongs function started"); // Debug statement

    const data = await fetch(track.tracks.href, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await data.json();

    // console.log("JSON:", json);
    setTracks(json);
  }

  return tracks;
};

export default usePlaylists;
