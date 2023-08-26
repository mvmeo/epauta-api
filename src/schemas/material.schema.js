import { z } from "zod";

export const createMaterialSchema = z.object({
  tipo: z.string({
    required_error: "El tipo de material es requerido",
  }),
  semestre: z.string({
    required_error: "El semestre es requerido",
  }),
  archivo: z.string({
    required_error: "El enlace al material es requerido",
  }),
  idRamo: z.string({
    required_error: "El ramo al que pertenece el material es requerido",
  }),
});
