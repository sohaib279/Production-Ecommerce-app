import express from "express";
import {
  registerController,
  loginController,
  testController,
  updateProfileController,
  getOrderController,
  getAllOrderController,
  orderStatusController,
} from "../controllers/authContoller.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/test", requireSignIn, isAdmin, testController);
//user proteceted route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin protected route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update user profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrderController);

//all  orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrderController);

//orders status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
