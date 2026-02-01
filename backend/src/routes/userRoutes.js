import { Router } from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  getWishlist,
  addToWishlist,
  removeFromWishlist
} from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.route("/profile")
  .get(protect, getProfile)
  .put(protect, updateProfile);

router.route("/wishlist")
  .get(protect, getWishlist);

router.route("/wishlist/:productId")
  .post(protect, addToWishlist)
  .delete(protect, removeFromWishlist);

export default router;
