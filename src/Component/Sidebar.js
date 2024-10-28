import React from "react";
import { LiaThumbsUp } from "react-icons/lia";
import { RiHome3Fill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdHistory, MdWatchLater } from "react-icons/md";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <RiHome3Fill className='text-xl'/>,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts className='text-xl' />,
      name: "shorts",
    },
    {
      icon: <MdSubscriptions className='text-xl' />,
      name: "Subscriptions",
    },
  ];

  const otherLinks = [
    {
      icon: <MdHistory className='text-xl' />,
      name: "History",
    },
    {
      icon: <MdWatchLater className='text-xl' />,
      name: "watchLater",
    },
    {
      icon: <LiaThumbsUp className='text-xl' />,
      name: "LikedVideos",
    },
  ];

  return (
   <div className='w-2/12  p-2 bg-[#212121] pr-5 overflow-auto pb-8 sidebar h-screen '>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )}
        )}
      </ul>

      <ul className='flex flex-col border-b-2 border-gray-700'>
        {otherLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )}
        )}
      </ul>
      </div>
  );
}
