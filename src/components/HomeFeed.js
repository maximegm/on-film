// import React from "react";
// import photoshome from "./HomeFeedPictures";

// class HomeFeed extends React.Component {
//   render() {
//     return (
//       <div className="movie-card">
//         <img src={photoshome.srcSet} alt={photoshome.title} />
//         <h2>{photoshome.title}</h2>
//       </div>
//     );
//   }
// }

// export default HomeFeed;

import React from "react";
import { Heading } from "rebass";
// import { Image } from "rebass";
// import { Tiles } from "@rebass/layout";

const HomeFeed = () => (
  <Heading as="h1" fontSize={[5, 6, 7]} color="white">
    mg . on film
  </Heading>
);

export default HomeFeed;
