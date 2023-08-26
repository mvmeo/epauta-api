import { Router } from "express";

import {
    getEstudiantes,
} from "../controllers/estudiante.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/estudiantes", authRequired, getEstudiantes);

export default router;