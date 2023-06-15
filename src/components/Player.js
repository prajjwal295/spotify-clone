import React from "react";
import Footer from "./Footer";
import SideNav from "./SideNav";
import Body from "./Body";

const Player = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <SideNav />
        <Body />
      </div>
        <Footer />
    </div>
  );
};

export default Player;
