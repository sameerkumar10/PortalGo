import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";
import { RequestDemo } from "../models/paymentModel.js";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error in checkout:", error);
    res.status(500).json({ success: false, error: "Error in checkout" });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      const paymentData = {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      };

      await Payment.create(paymentData);

      res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      console.error("Error in paymentVerification:", error);
      res
        .status(500)
        .json({ success: false, error: "Error in paymentVerification" });
    }
  } else {
    res.status(400).json({ success: false, error: "Invalid signature" });
  }
};

export const saveFormData = async (req, res) => {
  try {
    const paymentData = {
      name: req.body.firstName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      gstNumber: req.body.gstNumber,
      CompanyAddress: req.body.CompanyAddress,
    };
    await Payment.create(paymentData);
    res
      .status(200)
      .json({ success: true, message: "Form data saved to database" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ success: false, error: "Error saving form data" });
  }
};


export const requestdemoData = async (req, res) => {
  try {
    console.log('Received demo request data:', req.body);
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: "Name or phone number is missing"
      });
    }

    const requestDemoData = { name, phone };
    await RequestDemo.create(requestDemoData);

    res.status(200).json({
      success: true,
      message: "Demo request data saved to database."
    });
  } catch (error) {
    console.error("Error saving demo request data:", error);
    res.status(500).json({
      success: false,
      error: "Error saving demo request data",
      errorMsg: error.message
    });
  }
};




