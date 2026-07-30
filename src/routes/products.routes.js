const express = require("express");
const {
  getAllProducts,
  getProductById,
  getProductByCategory,
  deleteProduct,
  postProduct,
  updateProduct,
  getCategories,
} = require("../controller/product.controller");

const ProductRouter = express.Router();

// get product by Category
ProductRouter.get("/category", getProductByCategory);

// get all categories
ProductRouter.get("/categories", getCategories);

//get all products
ProductRouter.get("/all", getAllProducts);

//get product by id
ProductRouter.get("/:id", getProductById);

//delete product by Id
ProductRouter.delete("/delete/:id", deleteProduct);

//post  product
ProductRouter.post("/post", postProduct);

//update product
ProductRouter.put("/update/:id",updateProduct)

module.exports = ProductRouter;
