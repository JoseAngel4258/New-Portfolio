import React from "react";

const VideoBackground = () => {
  const videoRef = React.useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="h-screen w-screen absolute inset-0 z-[-1] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        src="/assets/videos/milkyway.mp4"
        className="h-full w-full object-cover"
      />
      <div className="h-full w-full bg-black opacity-75" />
    </div>
  );
};

export default VideoBackground;
