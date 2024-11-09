// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const userController = require("../controllers/userControllers") // Correct path to modules
const jwtAuthMiddleware = require("../middlewares/jwtMiddleware")


// Register a new user
router.post("/login", jwtAuthMiddleware.generateJwtToken, userController.loginUser);
router.post("/register", userController.registerUser);
module.exports = router;