const router = require("express").Router();

// Controllers
const {
  register,
  verify,
 login

} = require("../controllers/AuthController");

// Middleware
const { registerValidation,loginValidation,
} = require("../middlewares/auth");

// Routes
router.post("/registrar", registerValidation, register);
router.get("/verificar/:token", verify);
router.post("/login", login);

module.exports = router;