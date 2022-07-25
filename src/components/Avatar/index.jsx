import React from "react";
import style from "./style.css";

export const Avatar = ({ videoSrc, delay }) => {
  const avatarStyle = {
    position: "absolute",
    width: "100%",
    maxWidth: "128px",
    height: "108px",
    borderRadius: "12px",
    objectFit: "cover",

    // boxShadow:
    //   "0px 100px 80px rgba(0, 0, 0, 0.14), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.10064), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.083455), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.07), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.056545), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0393604)",
    // offsetDistance: "100%",
    // offsetRotate: "0deg",
    // offsetPath: `path('M8.5 146.5C31.3 62.5 141.333 23.1667 193.5 14C247.167 14 371.8 -6.99995 441 -91C527.5 -196 893.5 -52 1002 14C1110.5 80 1071.5 490.5 993.5 507.5C915.5 524.5 895.5 580.5 800.5 692.5C705.5 804.5 361.5 845 259.5 807.5C157.5 770 176.5 511 108.5 490.5C40.5 470 -20 251.5 8.5 146.5Z')`,
    // animation: `videoPath 40s linear infinite reverse`,
    animationDelay: `${delay * 10}s`,
  };
  return (
    <>
      <div
        style={{
          opacity: 0,
          animation: `fadeInVideo 1s linear`,
          animationFillMode: "forwards",
          animationDelay: `${delay}s`,
        }}
      >
        <video
          style={avatarStyle}
          className="avatar"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
