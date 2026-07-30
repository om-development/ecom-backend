const express = require("express");

const authRouter = express.Router();

const {
  userRegister,
  userLogin,
  getMe,
  logout,
} = require("../controller/auth.controller");
const { authenticate } = require("../middleware/auth.middleware");
const {
  registerRules,
  loginRules,
  validate,
} = require("../middleware/validate.middleware");

// Register route - validate then create user
authRouter.post("/register", registerRules, validate, userRegister);

// Login route - validate then authenticate user
authRouter.post("/login", loginRules, validate, userLogin);

// Get current user profile - requires valid token
authRouter.get("/me", authenticate, getMe);

// Logout route - requires valid token
authRouter.post("/logout", authenticate, logout);

module.exports = authRouter;
