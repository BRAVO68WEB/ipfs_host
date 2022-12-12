import { Router } from "express";
import addToIPNS from "../controllers/addToIPNS";

const router = Router();

router.post("/add", addToIPNS)

export default router;

