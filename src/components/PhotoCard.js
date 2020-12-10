import React from "react";
import { Box, Card, Heading, Image, Text } from "rebass";

function PostCard(props) {
  return (
    <Box width={[380, 560, 800]} mx="auto" my={2}>
      <Card
        sx={{
          p: 1,
          borderRadius: 8,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        }}
      >
        <Image src={props.image} />
        <Box px={2}>
          <Heading as="h3">{props.heading}</Heading>
          <Text fontSize={[0, 1]} py={1}>
            {props.message}
          </Text>
        </Box>
      </Card>
    </Box>
  );
}

export default PostCard;
