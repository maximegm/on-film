import React from "react";
import Fade from "react-reveal";
import PostCard from "./PhotoCard";
import ResponsivePhoto from "../images/Davenport";

import davm from "../images/davenport700.webp";

const HomeFeedGallery = () => (
  <>
    <Fade bottom>
      <ResponsivePhoto />
      <PostCard image={davm} heading="Davenport CA" message="off the cliff" />
    </Fade>
  </>
);

export default HomeFeedGallery;
