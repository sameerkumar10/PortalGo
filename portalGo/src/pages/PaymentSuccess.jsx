import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading
          as={motion.h1}
          textTransform={"uppercase"}
          animate={{ scale: [0.9, 1.1, 1] }}
          transition={{ duration: 0.5 }}
        >
          Order Successful
        </Heading>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Text>Reference No:{referenceNum}</Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Text fontWeight="bold">
          Your ID and password will be sent back to your email in some sort of times.
          Make Sure to login on your dashboard  !
          </Text>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;   
