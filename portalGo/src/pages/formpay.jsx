import React from "react";
import FormPay from "../components/Formpay";
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";

const FormpayPage = () => {
  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://www.localhost:4000/api/getkey");
      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/checkout", { amount });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "PortalGo",
        description: "Testing of razorpay of RazorPay",
        image:
          "https://www.svgrepo.com/show/303500/react-1-logo.svg",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Sameer Kumar",
          email: "sameer.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle the error here, such as showing a message to the user
    }
  };

  return (
    <>
      <ScrollToTop />
      <FormPay amount={5000} checkoutHandler={checkoutHandler} />
    </>                                                                                                                                                                                                   
  );
};

export default FormpayPage;
