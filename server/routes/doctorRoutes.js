const express = require("express");
const router = express.Router();
const doctorDetailControllers = require("../controllers/doctorDetailControllers");
const jwtAuthMiddleware = require("../middlewares/jwtMiddleware");

router.post("/register", doctorDetailControllers.registerDoctor);
// router.get("/", doctorDetailControllers.getAllDoctors)
// router.get("/email/:email", doctorDetailControllers.g);
module.exports = router;