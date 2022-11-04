const router = require("express").Router();

// Controllers
const {
  register,
  verify,
  login,
} = require("../controllers/AuthController");

// Middleware
const { registerValidation,loginValidation,
} = require("../middlewares/auth");

// Routes
router.post("/register", registerValidation, register);
router.get("/verify/:token", verify);


module.exports = router;