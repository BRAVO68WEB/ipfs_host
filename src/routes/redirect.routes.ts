import { Router } from "express";
import redirectIPNS from "../controllers/redirectIPNS";

const router = Router();

console.log("Loaded Redirection route")

router.get("/", redirectIPNS)

export default router;