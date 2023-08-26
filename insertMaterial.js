import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
import url from "url";

dotenv.config();

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  ssl: true,
};

const pool = new Pool(config);

const material = [
  {
    id: 103,
    ramo_id: "COC-2102",
    tipo: "Control 7",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1RtK-VaH2j0MXas8gFFkbMYv0-inn_bpv/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 104,
    ramo_id: "COC-2102",
    tipo: "Control 2",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1XIY-jvsVKJoNTNtTeuiHZjW0d42DhUwG/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 105,
    ramo_id: "COC-2102",
    tipo: "Control 6",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1YSzZMnfCAZQLA6hdTg_kyZ975ApCxiNy/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 106,
    ramo_id: "COC-2102",
    tipo: "Control 4",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1aLhZJ85VYtBmnzj5T-NIygnZXgs6U9wg/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 107,
    ramo_id: "COC-2102",
    tipo: "Control 1",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1ny0evUez_soCNloiL_vYLi7bgt5Xfrnp/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 108,
    ramo_id: "COC-2102",
    tipo: "Control 5",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1sZvY9yhp9eXb8RAoRbRtkUA3Z2QW293b/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 109,
    ramo_id: "COC-2102",
    tipo: "Control 3",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1xFJWynpiqfoqR8uE_NUCEsSu7eAIiEf6/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 76,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1rVfr0yKIeTefDp7u-1VGihpWxxfDrXH3/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 77,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/11wVvG4exMvj2lQKxGTFegkY0itqdY-VJ/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 78,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 3",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1DdFTsJQaODklzs7yIBO4mT8Ea_ygnSVF/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 79,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 4",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1aJdIHvFYIBLHtj6CLFUWevEA3zU3wkMl/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 80,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 4.1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1YIaFMuOaPkMuzr0L5Ov9cds8K8822wrL/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 81,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 5",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1kigHWmL1Xjtf-EVpqdviT3pZR-XS6B7y/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 82,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 6",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1ZQuoI4izKdUtD70fBFKiPVD8QdJJWJER/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 83,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 7",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1AhWryArO5eyTMOf5UXmqnFViStwPj-Go/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 84,
    ramo_id: "CII-2751",
    tipo: "Ayudantía 8",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1z3GnoZDCmv5s5hMuZmW78qalfFXJZd0_/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 85,
    ramo_id: "CII-2751",
    tipo: "Control 1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/10Q32v_m71pW-GXjF47OK090BWvSnjX3s/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 86,
    ramo_id: "CII-2751",
    tipo: "Control 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1THj98iGpbr04SYmaM5-9kZvRPVZHIfL-/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 87,
    ramo_id: "CII-2750",
    tipo: "Control 2",
    tags: "Pauta, Grupo 1, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/19JeFtz-mdLUBxlg98poO9toINEq6xR1M/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 88,
    ramo_id: "CII-2750",
    tipo: "Control 1",
    tags: "Pauta, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/19sq3OYFxUo-3cEOOUefM7p9oOcSJEyAu/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 89,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 7",
    tags: "Pauta, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1KVggTIY8Fj0AsPe6wvaLXDV87YBSsim9/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 90,
    ramo_id: "CII-2750",
    tipo: "Control 2",
    tags: "Pauta, Grupo 4, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1OC507MeUOkAc7U0NOgKbvEj4MlpikgzQ/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 59,
    ramo_id: "CII-2250",
    tipo: "Solemne 1",
    tags: "Pauta, Escaneado",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://www.dropbox.com/sh/5f4b0vpzskrh802/AADSOO9MKfoALYkdiccpXeiQa/4-%20SEMESTRE/EST%C3%81TICA/S1/2018-2%20Semestre%20Est%C3%A1tica%20S1.pdf?dl=0",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 60,
    ramo_id: "CBM-1005",
    tipo: "Control recuperativo",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1dtkA99gb5BodrJOwBEebMI_Y4vcgarDP/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 61,
    ramo_id: "CBM-1005",
    tipo: "Tarea 1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1YViW2I3-4muvcBxrW-M4D6v5wYO2vVhX/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 62,
    ramo_id: "CBM-1005",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1DKvbrLA31QoKJO9lBZ8S4LH8iG8PrGvR/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 63,
    ramo_id: "CBM-1005",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1AYiPA7jr8QsFE3zI__7fInY4zQbW7HQ1/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 64,
    ramo_id: "CBM-1005",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1eLTIOMyPXuOss33AAfcHEjcfoMVwC1GO/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 65,
    ramo_id: "CBM-1005",
    tipo: "Tarea 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1_05nrmgW9rwtdO5Lh7abKAq_GCWDOMke/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 66,
    ramo_id: "CBM-1005",
    tipo: "Control 1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1Y_iU5YQjddTwPAYBBMRhFmlnGAM_LlEO/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 67,
    ramo_id: "CBM-1005",
    tipo: "Control 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/14--xVtSPTpNkHounwChczespScjN2PQX/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 68,
    ramo_id: "CII-2250",
    tipo: "Control 1",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1zNrNVi4pFqJMtjI3tTzCnyEz6dNjXMZy/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 69,
    ramo_id: "CII-2250",
    tipo: "Control 2",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1S0M2VrNWrKotRx3Yw-bsYZ9xYGnJl92U/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 70,
    ramo_id: "CII-2250",
    tipo: "Control 3",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1sVIAjrNQn7V1yk21bfiqfWLRPQqxKRTA/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 71,
    ramo_id: "CII-2250",
    tipo: "Control 4",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/15p_kZQJRr0bDFt1L2KTAEsAZwdauGk_Y/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 72,
    ramo_id: "CII-2250",
    tipo: "Tarea 1",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1eZDsU-yjaVM3y-JP1OURoqAsg0aM0JHL/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 73,
    ramo_id: "CII-2250",
    tipo: "Tarea 2",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1QRpguHE2Oj_OmwxAO-aLSN2v_ZO9LZgD/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 74,
    ramo_id: "CII-2250",
    tipo: "Tarea 3",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1sxGjSNLLWIhGP79-h63gZXbcmZsd_v1S/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 75,
    ramo_id: "CII-2250",
    tipo: "Tarea 4",
    tags: "Enunciado, Digital",
    anio: 2021,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/16_mDr6dVfsBKTUiWU6iTeASJS0lMMRCR/view?usp=share_link",
    fecha_subida: "2023-04-20T00:00:00.000Z",
  },
  {
    id: 91,
    ramo_id: "CII-2750",
    tipo: "Control 2",
    tags: "Pauta, Grupo 2, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1TMBaTGH4pAvFMAcoIsboUGUL2pA5COOe/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 92,
    ramo_id: "CII-2750",
    tipo: "Control 1",
    tags: "Enunciado, Grupo 2, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1Uyjq7X4JbrDaznPS8WLUijEADVMWsKEn/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 93,
    ramo_id: "CII-2750",
    tipo: "Control 1",
    tags: "Enunciado, Grupo 4, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1dtMO3wpezLsqf38yXky4guoqNUbAZMYe/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 94,
    ramo_id: "CII-2750",
    tipo: "Control 1",
    tags: "Enunciado, Grupo 3, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1uBWX1m2tEDjmnJQei587g_KC3mnQQUlB/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 95,
    ramo_id: "CII-2750",
    tipo: "Control 1",
    tags: "Enunciado, Grupo 1, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1xPjp8z93nT_k4B9FKpIAWwavLEPDjgy3/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 96,
    ramo_id: "CII-2750",
    tipo: "Control 1",
    tags: "Pauta, Grupo 3, Digital",
    anio: 2020,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1yy84jpVQ1YnYePcrbqA2cXJgG8SZI-7s/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 98,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1QHEpn-XyAElnGRfb1AeNtIM3kOyUZVEe/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 1,
    ramo_id: "CBM-1006",
    tipo: "Control 3",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/10Um2ktwTTCWzqMvYKqQ49tWK6c3ZyzB3/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 99,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 1",
    tags: "Enunciado, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1U7vPCFCbym2frV5U_AoKRUA4_6l3nQWl/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 97,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 5",
    tags: "Enunciado, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/18OsTuACf6wgWUKDXXSFIEtrtwedVvORK/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 100,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 6",
    tags: "Enunciado, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1XjDa1Cx_K0TZio0KOZmrJqndfIP2P9ea/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 101,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 4",
    tags: "Enunciado, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1Yl2GVeGlGLQKnOiokSxwcdafe9-ftJHi/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 102,
    ramo_id: "CII-2750",
    tipo: "Ayudantía 3",
    tags: "Enunciado, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1vCfTwxoI6ojUxLxBo352yeFlrnVgTMMC/view?usp=share_link",
    fecha_subida: "2023-04-21T00:00:00.000Z",
  },
  {
    id: 14,
    ramo_id: "CBM-1006",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1V6BP-dhPJTSQbx3wvKu-EmiFBBYj0Xkw/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 15,
    ramo_id: "CBM-1006",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/12AYcVtim62mO6zjJU--Dq-IQBs-vaIif/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 16,
    ramo_id: "CBM-1006",
    tipo: "Solemne 3",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1BEhLuc7z4fG7yVPWzGyFJ8k8JKuvVCmZ/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 17,
    ramo_id: "CBM-1006",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1SGHWDKQu37cZ1fq0EstIBCMtIqtjp7z8/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 18,
    ramo_id: "CBM-1006",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1bnnInGj-tXpF2Ys6BU7Z9Kqsm69haoEp/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    ramo_id: "CBM-1006",
    tipo: "Control 3",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/19mnln1baNQyOPNSA30lgwI1yYAVpz1Si/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    ramo_id: "CBM-1006",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1ICXEcHdTnnGJIIgomHMAZ0SvFfakuNdL/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 4,
    ramo_id: "CBM-1006",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/184HbcEejmawZAdboTK2TKz1iBRmtm69j/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 19,
    ramo_id: "CBM-1006",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1Gi56cIXzVLfJRaMPNSzGF_w9Jt1ww1Vf/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 20,
    ramo_id: "CBF-1001",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2015,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1CbXChg6pPkv8wg0gNrwLiYyquhBmjZJV/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 21,
    ramo_id: "CBF-1001",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2013,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1OBFmXee6riwrF3-OgLilLxXFU63oz8AS/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 22,
    ramo_id: "CBF-1001",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2015,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1M1JHE4Gvf1XX5wiw2lTtprf1vEXhuOAH/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 23,
    ramo_id: "CBF-1001",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2014,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1WylJ70FcS5LF_jw9Uftl0ATvViu7KU2k/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 24,
    ramo_id: "CBF-1001",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2014,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1HPLTiTUag85Q2TdXakImgNxiKwAtlPCu/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 25,
    ramo_id: "CBF-1001",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2014,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1ZbWkBedEeClCoNZ0fjd-6gvr8w6u4nfJ/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 27,
    ramo_id: "CBM-1003",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1PcwxfYzlZGfwDGvXXhjEnvvjGd2K3v3B/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 28,
    ramo_id: "CBM-1003",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1CSh4Kiogvt3SrJTTQRGN4-LbdvspAu2A/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 29,
    ramo_id: "CBM-1003",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/18ZQUXDkBtLTFeWlwje2bTj4DpCx2yxGC/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 30,
    ramo_id: "CBM-1003",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1yzbJQE5KF00O2hq0mEm7hIkljg5jadn_/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 31,
    ramo_id: "CBM-1003",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1Il5XvSiVwS_kJJZyEQLX7j4x64ZWoJF0/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 32,
    ramo_id: "CBM-1001",
    tipo: "Control 1",
    tags: "Pauta, Digital",
    anio: 2021,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1nR2Vg4hvWR3sHmLBZ7fZNe3KbS_B-drD/view?usp=sharing",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 33,
    ramo_id: "CBM-1001",
    tipo: "Control 2",
    tags: "Pauta, Digital",
    anio: 2021,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/18hPvSRSWBH8qYlJRnfCf_tWWjXu_EJ96/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 34,
    ramo_id: "CBM-1001",
    tipo: "Control 3",
    tags: "Pauta, Digital",
    anio: 2021,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1T6cd-dr480e-wlTpNMUyvhtrvFnFiviF/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 35,
    ramo_id: "CBM-1001",
    tipo: "Control 4",
    tags: "Pauta, Digital",
    anio: 2021,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1c5qPRUBKGK6RSBcGqijNsV6xqQ5qTTvf/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 36,
    ramo_id: "CBM-1001",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1hvYgp7O-9OQf0SewAtMt9Pjqeff_pRUn/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 37,
    ramo_id: "CBM-1001",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2021,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/13UKryYFEkAakJbsKEqyJh5BL0tBvFS9z/view?usp=sharing",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 38,
    ramo_id: "CBM-1000",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1-4loNK_86u3JlfBXXCmNG1OitDPOqrLf/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 39,
    ramo_id: "CBM-1000",
    tipo: "Solemne 3",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1nU2sW3ESlHQnFC6cYCprCkcU-YYVjgrx/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 40,
    ramo_id: "CBM-1005",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1ZDYCho9hHrF1UelYEk6PtW20h6XBfyAk/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 41,
    ramo_id: "CBM-1005",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1mlFkgjt3eVhKqCFWyh25XMo6jonlxvXk/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 42,
    ramo_id: "CBM-1005",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1HogRfVfwgdKydq1snmM688yxcOmrThMf/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 49,
    ramo_id: "CBM-1002",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1h9iY6i-jbmJ6p0lZoB66p97MIyB_TPV8/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 50,
    ramo_id: "CBM-1002",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1nEbw6ZITsHHUMxvVDT0deunie46GICnB/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 5,
    ramo_id: "CBM-1006",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1lwsM9eBY6q98bt2xl-m0qs2zgHaTVZ8w/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 6,
    ramo_id: "CBM-1006",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1JJSf50rRWJYMwve3tp3vo0x2JlxUYw2y/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 7,
    ramo_id: "CBM-1006",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1jcpunCXAOcof15cUZj4pM2HLm8_gjpl_/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 8,
    ramo_id: "CBM-1006",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1d94zCKawny7ANDseF0MtntgmWavtyNQO/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 9,
    ramo_id: "CBM-1006",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1SsJUhxOZu3z-AUGnUDUoG-E5dRXAjONL/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 10,
    ramo_id: "CBM-1006",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1ls5DtD0xqAP7X13kFjyN-AgTyGyyp6QP/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 11,
    ramo_id: "CBM-1006",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2016,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/17T0f0R_Za1mo1-BORSZEOmtM48gmD3ab/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 12,
    ramo_id: "CBM-1006",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1KikT5NF4xEMTLHs9y25ENBIW_9D2kPFn/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 13,
    ramo_id: "CBM-1006",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2017,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/14JDLSte4BjoEgRiHgHePaVs5BNHFpFn1/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 43,
    ramo_id: "CBM-1005",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/14N_7XvjAUaHzrjWnVXzTQxgJ7Gj2UaXL/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 44,
    ramo_id: "CBM-1005",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1vwyf8a1_pcS-mPBLc0zEYz26osZnH5U7/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 45,
    ramo_id: "CBM-1005",
    tipo: "Solemne 3",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1iWv0kKJSA9UZa3sXdcUbg2ecBaSVY9Vs/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 46,
    ramo_id: "CBM-1002",
    tipo: "Control 1",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/16RmyBVduXQts6vF7PB6YLmrH0sKhk29m/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 47,
    ramo_id: "CBM-1002",
    tipo: "Control 2",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1H7SBGmVXqWwMpx2akwXVrA3HEHBU2lOv/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 48,
    ramo_id: "CBM-1002",
    tipo: "Control 3",
    tags: "Pauta, Digital",
    anio: 2018,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/1n6XM6W2pT4fgvyPwY6pKKWf-ZzuKBfVf/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 51,
    ramo_id: "CBM-1002",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1-qnBI8ccnLhKYGucXo6uRjcLLNDPahWk/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 52,
    ramo_id: "CBM-1002",
    tipo: "Solemne 2",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1ZACkADkTmr6osoTjB_oy4CPc9jEaDcge/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 53,
    ramo_id: "CBM-1002",
    tipo: "Solemne 3",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1rUyTpr9t4UZiB9IsGbFzR0XC9H8_SVqe/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 54,
    ramo_id: "CBM-1002",
    tipo: "Solemne 1",
    tags: "Pauta, Digital",
    anio: 2019,
    semestre: 2,
    enlace:
      "https://drive.google.com/file/d/11Y0S1asoDVWgWwFn2CIYAv3Y3BccpE0D/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 55,
    ramo_id: "CIT-1010",
    tipo: "Control 1",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1q62k2LZlKjI4aGTDVo_xFEShTKzcaSBH/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 56,
    ramo_id: "CIT-1010",
    tipo: "Control 2",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1ncS8-Z5z_9u3TVSKx1WE48H9d7rCxUbi/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 57,
    ramo_id: "CBQ-1000",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1VBy0CPyXL7oY6xeeYlYpmhUkQSdIke2V/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
  {
    id: 58,
    ramo_id: "CBQ-1000",
    tipo: "Examen",
    tags: "Pauta, Digital",
    anio: 2022,
    semestre: 1,
    enlace:
      "https://drive.google.com/file/d/1e0ZWT0SEx_5svU2-WK-7C_QC6LOafGCa/view?usp=share_link",
    fecha_subida: "2023-01-01T00:00:00.000Z",
  },
];

//   {
//     "id": 103,
//     "ramo_id": "COC-2102",
//     "tipo": "Control 7",
//     "tags": "Enunciado, Digital",
//     "anio": 2021,
//     "semestre": 2,
//     "enlace": "https://drive.google.com/file/d/1RtK-VaH2j0MXas8gFFkbMYv0-inn_bpv/view?usp=share_link",
//     "fecha_subida": "2023-04-21T00:00:00.000Z"
//   }

const insertMaterialInDatabase = async () => {
  console.log(material.length);
  try {
    for (let i = 0; i < material.length; i++) {
      console.log("inserting material " + i);
      await pool.query(
        "INSERT INTO material (id_ramo, tipo, anio, semestre, archivo, fecha_subida, tags) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          material[i].ramo_id,
          material[i].tipo,
          material[i].anio,
          material[i].semestre,
          material[i].enlace,
          material[i].fecha_subida,
          material[i].tags,
        ]
      );
    }
  } catch (error) {
    console.log(error);
  }
};

insertMaterialInDatabase();
