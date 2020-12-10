import React from "react";
import { Box, Flex, Link, Text } from "rebass";

const NavBar = () => (
  <Flex px={2} color="gold" bg="white" alignItems="center">
    <Text p={2} fontWeight="bold">
      mg.<i>OnFilm</i>
    </Text>
    <Box mx="auto" />
    <Link color="cyan" href="#!">
      Profile
    </Link>
  </Flex>
);

export default NavBar;

// const NavBar = () => (
//     <nav>
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/gallery">Portfolio</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//         </ul>
//     </nav>
// );
