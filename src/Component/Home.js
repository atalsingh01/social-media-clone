import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {useAppDispatch,useAppSelector} from  '../hooks/useApp'
import { getHomePageVideos } from "../Store/reducers/getHomePageVideos";
import Spinner from "./Spinner";
//import card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home() {
const dispatch =useAppDispatch();
const video =useAppSelector((state)=> state.youtubeApp.videos);

useEffect(()=>{

  dispatch(getHomePageVideos(false));

},[dispatch])

  return (
    <div className="max-h-screen overflow-hidden">
    <div style={{ height: "7.5vh" }}>
      <Navbar />
    </div>
    <div className="flex" style={{ height: "92.5vh" }}>
      <Sidebar />
      {video.length ? (
        <InfiniteScroll
          dataLength={video.length}
          next={() => dispatch(getHomePageVideos(true))}
          hasMore={video.length < 500}
          loader={<spinner/>}
          height={650}
        >
          <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
            {video.map((item) => {
              return <card data={item} key={item.videoId} />;
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <Spinner/>
      )}
    </div>
  </div>
  );
}
