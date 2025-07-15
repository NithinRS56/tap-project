const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");
const productController = require("../controllers/productController");

// Example admin-only route
router.post("/admin-only", verifyToken, allowRoles("admin"), (req, res) => {
  res.json({ message: "Only admin can see this" });

});
router.post(
  "/",
  verifyToken,
  allowRoles("admin"),
  productController.addProduct
);
// Get all products (public route)
router.get('/', productController.getAllProducts);
// Get single product by ID (public)
router.get('/:id', productController.getProductById);

// Update product by ID (admin only)
router.put('/:id', verifyToken, allowRoles('admin'), productController.updateProduct);
// Delete product by ID (admin only)
router.delete('/:id', verifyToken, allowRoles('admin'), productController.deleteProduct);


module.exports = router;
