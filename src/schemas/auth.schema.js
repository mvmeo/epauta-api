import { z } from "zod";

function validarCorreoUDP(correo) {
    // Expresión regular para validar el dominio
    var regex = /@mail\.udp\.cl$/;
  
    // Usamos test() para verificar si el correo coincide con la expresión regular
    return regex.test(correo);
  }

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  apellido: z.string({
    required_error: "El apellido es requerido",
  }),
  correo: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "El email no es valido",
    })
    .refine((data) => validarCorreoUDP(data), {
        message: "El correo debe ser de la UDP",
    }),
  carrera: z.string({
    required_error: "Debes seleccionar una carrera",
  }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
});

export const loginSchema = z.object({
  correo: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "El correo no es valido",
    }),
  password: z.string({
    required_error: "La contraseña es requerida",
  }),
});
