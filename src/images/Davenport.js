import React from "react";
import ProgressiveImg from "./ProgressiveImage";
import davs from "../images/davenport320.webp";
import davm from "../images/davenport700.webp";
import davl from "../images/davenport1600.webp";
import davjpg from "../images/davSmall.jpg";

import glaciers from "../images/glacier-320.webp";
import glacierm from "../images/glacier-700.webp";
import glacierl from "../images/glacier-1600.webp";
import glacierjpg from "../images/glacier-jpg.jpg";

import sunsets from "../images/sunset-320.webp";
import sunsetm from "../images/sunset-700.webp";
import sunsetl from "../images/sunset-1600.webp";
import sunsetjpg from "../images/sunset-jpg.jpg";

import valleeblanches from "../images/vallee-blanche-320.webp";
import valleeblanchem from "../images/vallee-blanche-700.webp";
import valleeblanchel from "../images/vallee-blanche-1600.webp";
import valleeblanchejpg from "../images/vallee-blanche-jpg.jpg";

const ResponsivePhoto = () => (
  <>
    <ProgressiveImg
      image={davjpg}
      small={davs}
      medium={davm}
      large={davl}
      jpg={davjpg}
      title="Davenport beach, CA"
    />
    <ProgressiveImg
      image={glacierjpg}
      small={glaciers}
      medium={glacierm}
      large={glacierl}
      jpg={glacierjpg}
      title="glacier d'argentiere, chamonix"
    />
    <ProgressiveImg
      image={sunsetjpg}
      small={sunsets}
      medium={sunsetm}
      large={sunsetl}
      jpg={sunsetjpg}
      title="Sunset over the pacific, Bonny Doon, CA"
    />
    <ProgressiveImg
      image={valleeblanchejpg}
      small={valleeblanches}
      medium={valleeblanchem}
      large={valleeblanchel}
      jpg={valleeblanchejpg}
      title="Chamonix Glacier, Alps, France"
    />
  </>
);

export default ResponsivePhoto;
