import React, { useEffect, useRef } from "react";

const WelcomeSection = ({ title, subtitle, description, bgVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Function to check if the current device is an iOS device
    const isIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };

    // Autoplay the video on iOS devices
    const playVideoOnIOS = () => {
      video.play();
    };

    // Autoplay the video on Android devices
    const playVideoOnAndroid = () => {
      video.muted = true; // Ensure the video is muted for autoplay on Android
      video.play();
    };

    // Check the device and trigger video autoplay accordingly
    if (isIOS()) {
      video.addEventListener("canplay", playVideoOnIOS);
    } else {
      video.addEventListener("canplay", playVideoOnAndroid);
    }

    return () => {
      video.removeEventListener("canplay", playVideoOnIOS);
      video.removeEventListener("canplay", playVideoOnAndroid);
    };
  }, []);

  return (
    <section id="welcome" className="relative -z-50">
      <div className="video-background">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full"
          ref={videoRef}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[#E7F6F2] font-heading2 font-medium lg:text-[28px] lg:py-[10px] pl-1 text-[18px] leading-[19px] tracking-[2.7px]">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br className="block md:hidden" />
            </React.Fragment>
          ))}
          <span className="text-[#A5C9CA] font-heading1 md:text-[150px] font-medium text-4xl leading-[100px] md:py-[10px]">
            {subtitle}
          </span>
        </h1>
        <p className="font-heading3 tracking-wider leading-[30px] text-white text-justify py-6 px-2 md:max-w-[600px] mx-auto lg:text-[26px] ">
          {description}
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
