'use client';

import { X, YoutubeLogo } from '@phosphor-icons/react';
import React, { useState } from 'react';
import YouTube from 'react-youtube';

interface YouTubeProps {
  youtubeId: string;
}

const VideoPlayer: React.FC<YouTubeProps> = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const options = {
    height: '300',
    width: '250',
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleVideoPlayer} className="text-color-primary float-right hover:text-color-accent px-3 mb-1">
          {<X size={32} />}
        </button>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} onError={() => alert('video is error, please try another :)')} opts={options} />
      </div>
    );
  };
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return isOpen ? (
    <Player />
  ) : (
    <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 bg-color-primary text-color-dark hover:text-color-primary p-2 rounded-md hover:bg-color-accent transition-all">
      <span className="hidden sm:inline">Tonton Trailer</span>
      <span className="sm:hidden">
        <YoutubeLogo className="w-8 h-8" />
      </span>
    </button>
  );
};

export default VideoPlayer;
