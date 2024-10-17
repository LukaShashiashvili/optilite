'use client'
import React from "react";
import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";

const Video: React.FC = () => {
  const videoSources = [
    {
      src: "/optilite.mp4",
      type: "video/mp4",
    },
  ];

  const videoProps: VideoPlayerProps = {
    theme: "sea", // 'city', 'fantasy', 'forest', 'sea'
    height: 800,
    width: 600,
    autoPlay: false,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
    },
  };

  return <VideoPlayer {...videoProps} />;
};

export default Video;