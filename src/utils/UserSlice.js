import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    playlists: [],
    spotify:null,
    discover_weekly:null,
    playing: false,
    item: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // console.log("user", state.user);
    },
    setItem: (state, action) => {
      state.user = action.payload;
      // console.log("item", state.item);
    },
    setPlaying: (state, action) => {
      state.user = action.payload;
      // console.log("playinh", state.playing);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      console.log("token", state.token);
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
      // console.log("playlist", state.playlists);
    },
    setDiscoverWeekly: (state, action) => {
      state.discover_weekly = action.payload;
      // console.log("discover", state.discover_weekly);
    },
    setSpotify: (state, action) => {
      state.discover_weekly = action.payload;
      // console.log("discover", state.discover_weekly);
    },
  },
});

export const {
  setSpotify,
  setUser,
  setToken,
  setPlaylists,
  setDiscoverWeekly,
  setItem,
  setPlaying,
} = UserSlice.actions;

export default UserSlice.reducer;
