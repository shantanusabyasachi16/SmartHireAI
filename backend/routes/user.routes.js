import express from "express";

import authenticated from "../middleware/authenticated.js"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(authenticated,updateProfile);
router.route("/logout").get(logout);

export default router;