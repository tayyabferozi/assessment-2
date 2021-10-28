const router = require("express").Router();

const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require("./controller");

router.get("/", getAllProducts);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
