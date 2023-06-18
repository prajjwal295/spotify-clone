import React from "react";
import Footer from "./Footer";
import SideNav from "./SideNav";
import Body from "./Body";
import Search from "./Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import SongList from "./SongList";

const Player = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row">
        <SideNav />
        {/* <Routes>
          <Route path="/#" element={<Body />} />
          <Route path="/Home" element={<Body />} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/playlist/:id" element={<SongList/>} />
        </Routes> */}
        .
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
