import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("user",state.user);
    },
    setToken: (state, action) => {
      state.token = action.payload;
         console.log("token",state.token);
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
         console.log("playlist", state.playlists);
    },
    setDiscoverWeekly: (state, action) => {
      state.discover_weekly = action.payload;
         console.log("discover", state.discover_weekly);
    },
  },
});

export const { setUser, setToken, setPlaylists, setDiscoverWeekly } =
  UserSlice.actions;

export default UserSlice.reducer;
