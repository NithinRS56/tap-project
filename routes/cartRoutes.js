const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController"); // ✅ this must exist
const verifyToken = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

// ✅ This line should not break!
router.post("/", verifyToken, allowRoles("customer"), cartController.addToCart);
router.get("/", verifyToken, allowRoles("customer"), cartController.getCart);
router.put(
  "/:productId",
  verifyToken,
  allowRoles("customer"),
  cartController.updateCartItem
);
router.delete(
  "/:productId",
  verifyToken,
  allowRoles("customer"),
  cartController.removeCartItem
);


module.exports = router;
