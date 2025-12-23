const express = require("express");
const router = express.Router();

const {
  addNewProducts,
  getProductById,
  updateProductById,
} = require("../controllers/products");

router.post("/", addNewProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);

module.exports = router;
