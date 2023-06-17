import React from 'react'
import Header from './Header';
import { useSelector } from 'react-redux';
import PlaylistSection from './PlaylistSection';
import { Link } from 'react-router-dom';

 const Body = () => {

  const Playlists = useSelector((store) => store.cart.playlists);
  console.log(Playlists);
  return (
    <div className="border-2 h-[100vh] border-black flex-[0.8] bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgb(91,87,115)] ">
      <Header />
      <div className="mt-4 m-4 grid grid-cols-3  gap-x-[25px] gap-y-[15px]">
        {Playlists?.items?.map((item) => {
           const tracks = item.tracks.href;
          return (
            <Link to={`/playlist/${item.id}`} tracks={item.tracks}>
              <PlaylistSection
                key={item.id}
                name={item.name}
                image={item.images[0].url}
                tracks={item.tracks}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body
