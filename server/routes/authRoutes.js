// To provide route mapping to apis.

// 1. Import express.
const express = require("express");
const controller = require("../controllers/authController");

// 2. Configure router.
const router = express.Router();

// 3. Configure path/method and assign api to path.
// localhost:4100/api/auth/register
router.post("/register", controller.register);
router.post("/login", controller.login);

// localhost:4100/api/products

module.exports = router;
