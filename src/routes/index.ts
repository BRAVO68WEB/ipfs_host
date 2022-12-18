import { Router } from 'express';
import pk from './pk.routes'

const router = Router();

router.use("/pk", pk)

export default router
