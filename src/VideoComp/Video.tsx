import React, { useRef, useEffect } from 'react';
import videoSrc from '../assets/videoplayback.mp4';
import './Video.scss';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} width="100%" autoPlay muted playsInline loop>
        <source src={videoSrc} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
    </div>
  );
};

export default Video;
