import express from "express";

import authenticated from "../middleware/authenticated.js"
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";


const router = express.Router();

router.route("/apply/:id").get(authenticated, applyJob);
router.route("/get").get(authenticated,getAppliedJobs);
router.route("/:id/applicants").get(authenticated,getApplicants);
router.route("/status/:id/update").post(authenticated,updateStatus);

export default router;