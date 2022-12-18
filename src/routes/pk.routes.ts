import { Router } from "express";
import addToIPNS from "../controllers/addToIPNS";

const router = Router();

console.log("[W.I.P] Loaded IPNS routes")

router.post("/publish", addToIPNS)

export default router;