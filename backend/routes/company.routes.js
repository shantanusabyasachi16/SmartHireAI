import express from "express";

import authenticated from "../middleware/authenticated.js"
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";


const router = express.Router();


router.route("/register").post(authenticated,registerCompany);
router.route("/get").get(authenticated,getCompany);
router.route("/get/:id").get(authenticated,getCompanyById);
router.route("/update/:id").put(authenticated,updateCompany);

export default router;