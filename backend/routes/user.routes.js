const express = require ('express');
const { register, login, updateProfile, logout } = require('../controllers/user');

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(updateProfile);
router.route("/logout").post(logout);