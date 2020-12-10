import React from "react";
import ProgressiveImg from "./ProgressiveImage";
import davs from "../images/davenport320.webp";
import davm from "../images/davenport700.webp";
import davl from "../images/davenport1600.webp";
import davjpg from "../images/davSmall.jpg";

const ResponsivePhoto = () => (
  <ProgressiveImg
    image={davjpg}
    small={davs}
    medium={davm}
    large={davl}
    jpg={davjpg}
    title="davenport sure is pretty"
  />
);

export default ResponsivePhoto;
