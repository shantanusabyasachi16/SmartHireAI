import express from "express";

import authenticated from "../middleware/authenticated.js"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();


router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/profile/update").post(authenticated,singleUpload,updateProfile);
router.route("/logout").get(logout);

export default router;