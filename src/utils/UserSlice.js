import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    playlists: [],
    playlistsApi: [],
    spotify: null,
    discover_weekly: null,
    playing: false,
    item: null,
  },

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      console.log("token", state.token);
    },
    setUser: (state, action) => {
      state.user = action.payload;
      // console.log("user", state.user);
    },
    setItem: (state, action) => {
      state.item = action.payload;
      // console.log("item", state.item);
    },
    setPlaying: (state, action) => {
      state.playing = !state.playing;
      // console.log("playinh", state.playing);
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
      // console.log("playlist", state.playlists);
    },
    setPlaylistApi: (state, action) => {
      state.playlistsApi = action.payload;
      console.log("playlistApi", state.playlistsApi);
    },
    setDiscoverWeekly: (state, action) => {
      state.discover_weekly = action.payload;
      // console.log("discover", state.discover_weekly);
    },
    setSpotify: (state, action) => {
      state.spotify = action.payload;
      // console.log("discover", state.discover_weekly);
    },
  },
});

export const {
  setSpotify,
  setUser,
  setToken,
  setPlaylists,
  setPlaylistApi,
  setDiscoverWeekly,
  setItem,
  setPlaying,
} = UserSlice.actions;

export default UserSlice.reducer;
