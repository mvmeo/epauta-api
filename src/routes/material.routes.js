import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { cache } from "../middlewares/cache.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMaterialSchema } from "../schemas/material.schema.js";

import {
  getMaterial,
  getMaterialByRamo,
  getMaterialById,
  createMaterial,
  deleteMaterial,
  ayudantiasByRamo,
  controlesByRamo,
  solemnesByRamo,
  examanesByRamo,
  otrosByRamo,
  ayudantiasIdByRamo,
  controlesIdByRamo,
  solemnesIdByRamo,
  examanesIdByRamo,
  otrosIdByRamo,
  getMaterialPendienteByUserId,
  getMaterialPendienteByUserIdAndMaterialId,
  createMaterialPendiente,
  deleteMaterialPendiente,
  getMaterialByUserId
} from "../controllers/material.controller.js";

const router = Router();

router.get("/", cache , getMaterial);
router.post(
  "/",
  authRequired,
  validateSchema(createMaterialSchema),
  createMaterial
);
router.get("/ramo/:slug", authRequired, cache, getMaterialByRamo);
router.get("/:id", authRequired, getMaterialById);
router.delete("/:id", authRequired, deleteMaterial);
router.get("/estudiante/:user_id", authRequired, getMaterialByUserId)
router.delete("/:id", authRequired, deleteMaterial);
router.get("/:slug/ayudantias", authRequired, ayudantiasByRamo);
router.get("/:slug/controles", authRequired, controlesByRamo);
router.get("/:slug/solemnes", authRequired, solemnesByRamo);
router.get("/:slug/examenes", authRequired, examanesByRamo);
router.get("/:slug/otros", authRequired, otrosByRamo);
router.get("/:slug/ayudantia/:id", authRequired, ayudantiasIdByRamo);
router.get("/:slug/controle/:id", authRequired, controlesIdByRamo);
router.get("/:slug/solemne/:id", authRequired, solemnesIdByRamo);
router.get("/:slug/examen/:id", authRequired, examanesIdByRamo);
router.get("/:slug/otro/:id", authRequired, otrosIdByRamo);
router.get("/pendientes/:id_estudiante", authRequired, cache, getMaterialPendienteByUserId);
router.get(
  "/pendientes/:id_estudiante/:id_material",
  authRequired,
  getMaterialPendienteByUserIdAndMaterialId
);
router.post("/pendientes", authRequired, createMaterialPendiente);
router.delete("/pendientes/:id", authRequired, deleteMaterialPendiente);

export default router;
