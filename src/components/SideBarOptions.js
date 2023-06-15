import React from 'react'

const SideBarOptions = ({option , Icon}) => {
    console.log(option)
  return (
    <div className="flex m-3 px-3 border-2 border-white">
      <Icon className="h-5" />
      <h4>{option}</h4>
    </div>
  );
}

export default SideBarOptions