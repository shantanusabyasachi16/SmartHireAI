import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import authenticated from "../middleware/authenticated"

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(authenticated,updateProfile);
router.route("/logout").post(logout);

export default router;