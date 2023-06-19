import React from 'react'

const SideBarOptions = ({option , Icon}) => {
    console.log(option)
  return (
    <div className="flex mx-3 my-2 h-[30px] items-center px-3 text-[rgb(169,171,173)] hover:text-white">
      <Icon className="h-5 mr-2" />
      <h4>{option}</h4>
    </div>
  );
}

export default SideBarOptions