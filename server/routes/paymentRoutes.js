const express = require("express");
const paymentControllers = require("../controllers/paymentControllers");

const router = express.Router();

router.post("/", paymentControllers.payWithStripe);

module.exports = router;
