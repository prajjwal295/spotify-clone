import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const user= useSelector((store)=>store.cart.user);
    console.log({user})
    
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex justify-between m-6">
      <div className="left  h-[40px] w-[350px] flex rounded-3xl">
        <button className="flex-[0.2] pl-2 bg-[rgb(42,44,63)] text-2xl rounded-3xl rounded-r-none ">
          🔍
        </button>
        <input
          type="placeholder"
          value={searchInput}
          placeholder="What do you want to listen to"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="w-full bg-[rgb(42,44,63)] text-gray-200 pl-2 rounded-3xl rounded-l-none"
        />
      </div>
      <div className="right flex items-center">
        <img src={user?.images[0]?.url} alt="logo" className="h-10 rounded-full mr-3"/>
        <h1 className="text-white text-lg">{user?.display_name}</h1>
      </div>
    </div>
  );
};

export default Header;
