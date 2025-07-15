const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const verifyToken = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

router.post(
  "/",
  verifyToken,
  allowRoles("customer"),
  orderController.createOrder
);

module.exports = router;
