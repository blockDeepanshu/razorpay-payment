import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

function Home() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:3000/api-key");

    const {
      data: { order },
    } = await axios.post("http://localhost:3000/api/checkout", {
      amount,
    });

    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Amazon Corp",
      description: "",
      image:
        "https://uploads-ssl.webflow.com/64bf9f837519806dd618348c/64c0dd6cd38288bedf5d0fbe_Icon%20(2).svg",
      order_id: order.id,
      callback_url: "http://localhost:3000/api/verifypayment",
      prefill: {
        name: "Gaurav Kumar",
        email: "chaud785@gmail.com",
        contact: "8178751288",
      },

      theme: {
        color: "#3399cc",
      },
    };

    var razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack direction={["column", "row"]}>
        <Card
          amount={5000}
          img="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          checkoutHandler={checkoutHandler}
        />

        <Card
          amount={3000}
          img="https://images.unsplash.com/photo-1561930543-32ede0352b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
}

export default Home;
