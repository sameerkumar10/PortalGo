import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  name: String,
  email: String,
  phoneNumber: String,
  gstNumber: String,
  Companyaddress: String,
});

const requestDemoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

export const Payment = mongoose.model("Payment", paymentSchema);
export const RequestDemo = mongoose.model('RequestDemo', requestDemoSchema);

