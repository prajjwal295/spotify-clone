import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Login from "./components/Login.";
import { getTokenFromUrl } from "./utils/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { Provider } from "react-redux";
import { CLIENT_ID } from "./config";
import { useDispatch } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Player from "./components/Player";
import SongList from "./components/SongList";

import {
  setUser,
  setToken,
  setPlaylists,
  setDiscoverWeekly,
} from "./utils/UserSlice";

const AppLayout = () => {
  const [Token, setToken] = useState();

  const dispatch = useDispatch();

  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // console.log(hash);
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log(_token);

    if (_token) {
      setToken(_token);

      spotify.getMe().then((_token) => {
        dispatch(setToken(_token));
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(setUser(user));
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists));
      });

      spotify.getPlaylist(CLIENT_ID).then((playlist) => {
        dispatch(setDiscoverWeekly(playlist));
      });
    }
  }, []);

  return <>{!Token ? <Login /> : <Player />}</>;
};



const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
   <AppLayout/>
  </Provider>
);
