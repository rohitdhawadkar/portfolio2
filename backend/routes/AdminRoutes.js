import express from "express";

import { AdminRegister } from "../controllers/AdminController.js";

const router = express.Router();

router.post("/register",AdminRegister);

export default router;
