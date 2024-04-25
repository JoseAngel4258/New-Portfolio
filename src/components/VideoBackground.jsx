import React, { useRef, useEffect } from "react";

const VideoBackground = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Set video time to the beginning
        videoRef.current.play(); // Play the video again
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen fixed inset-0 z-[-1] overflow-hidden brightness-75">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        src={src}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default VideoBackground;
