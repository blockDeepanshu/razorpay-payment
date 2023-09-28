import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Card({ amount, img, checkoutHandler }) {
  return (
    <VStack>
      <Image src={img} boxSize={200} objectFit="cover" />
      <Text>Rs.{amount}</Text>
      <Button onClick={() => checkoutHandler(amount)}>Buy now</Button>
    </VStack>
  );
}

export default Card;
