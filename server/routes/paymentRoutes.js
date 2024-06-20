import express from "express";
import { checkout, paymentVerification, saveFormData ,requestdemoData} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);
router.route("/form-data").post(saveFormData); 
router.route("/requestdemo").post(requestdemoData);

export default router;