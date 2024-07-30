"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoHero = () => {
  //video path
  let videosrc = "/animation/BULAT_WEBM.webm";

  return (
    <div>
      <ReactPlayer
        width="1000px"
        height="100%"
        url={videosrc}
        controls={false}
        loop={true}
        muted={true}
        playing={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/webm" />
    </div>
  );
};

export default VideoHero;