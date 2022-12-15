
const express = require("express");
const controller = require("../controllers/employeeController");

const router = express.Router();

router.post("/", controller.createEmployee);

module.exports.router = router;