const express = require("express");
const router = express.Router();
const { registerUser, login } = require("../controllers/userController");
router.post("/register", registerUser);
router.post("/login", login);
const { protect } = require("../middlewares/auth");

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});
module.exports = router;
