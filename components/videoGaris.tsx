"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoGaris = () => {
  //video path
  let videosrc = "/animation/GARIS_WEBM.webm";

  return (
    <div>
      <ReactPlayer
        width="100%"
        height="600px"
        url={videosrc}
        controls={true}
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

export default VideoGaris;