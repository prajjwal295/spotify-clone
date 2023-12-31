import React from "react";
import Footer from "./Footer";
import SideNav from "./SideNav";
import Body from "./Body";
import Search from "./Search";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import SongList from "./SongList";

export const Player = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <div className="flex flex-row flex-[0.8]">
        <SideNav />
        <Outlet className="webkit"/>
      </div>
      <Footer className="flex-[0.2]" />
    </div>
  );
};

export default <RouterProvider/>;
