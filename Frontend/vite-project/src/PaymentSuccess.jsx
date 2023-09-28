import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>order successfull</Heading>
        <Text>Reference no. : {referenceNum}</Text>
      </VStack>
    </Box>
  );
}

export default PaymentSuccess;
