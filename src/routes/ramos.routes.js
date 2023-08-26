import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { cache } from "../middlewares/cache.js";

import {
    getRamos,
    getRamoByCodigo,
    getRamosCienciasBasicas,
    getRamosInformatica,
    getRamosIndustrial,
    getRamosObrasCiviles,
    getRamosOtrosComunes,
    getRamosFavoritosByEstudianteId,
    addRamoFavorito,
    deleteRamoFavorito,
} from "../controllers/ramos.controller.js";

const router = Router();

router.get("/", authRequired, cache, getRamos);
router.get("/:codigo", authRequired, getRamoByCodigo);
// router.get("/ciencias-basicas", authRequired, getRamosCienciasBasicas);
// router.get("/informatica", authRequired, getRamosInformatica);
// router.get("/industrial", authRequired, getRamosIndustrial);
// router.get("/obras-civiles", authRequired, getRamosObrasCiviles);
// router.get("/otros", authRequired, getRamosOtrosComunes);
router.get("/favoritos/:id_estudiante", authRequired, cache, getRamosFavoritosByEstudianteId);
router.post("/favoritos/:id_estudiante", authRequired, addRamoFavorito);
router.delete("/favorito/:id_estudiante", authRequired, deleteRamoFavorito);

export default router;