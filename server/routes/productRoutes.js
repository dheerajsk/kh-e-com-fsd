// To provide route mapping to apis.

// 1. Import express.
const express = require("express");
const controller = require("../controllers/productController");

// 2. Configure router.
const router = express.Router();

// 3. Configure path/method and assign api to path.

router.get("/", controller.getProducts);

// localhost:4100/api/products

module.exports = router;
