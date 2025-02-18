import React from "react";

const ProfileImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
};

export default ProfileImage;
