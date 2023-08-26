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

const ramos = [
  {
    id: "CBM-1000",
    nombre: "Álgebra y geometría",
  },
  {
    id: "CBM-1001",
    nombre: "Cálculo I",
  },
  {
    id: "CBQ-1000",
    nombre: "Química",
  },
  {
    id: "CIT-1000",
    nombre: "Programación",
  },
  {
    id: "FIC-1000",
    nombre: "Comunicación para la ingeniería",
  },
  {
    id: "CBM-1002",
    nombre: "Álgebra lineal",
  },
  {
    id: "CBM-1003",
    nombre: "Cálculo II",
  },
  {
    id: "CBF-1000",
    nombre: "Mecánica",
  },
  {
    id: "CIT-1010",
    nombre: "Programación avanzada",
  },
  {
    id: "CBM-1005",
    nombre: "Ecuaciones diferenciales",
  },
  {
    id: "CBM-1006",
    nombre: "Cálculo III",
  },
  {
    id: "CBF-1001",
    nombre: "Calor y ondas",
  },
  {
    id: "CII-2750",
    nombre: "Optimización",
  },
  {
    id: "CII-1000",
    nombre: "Contabilidad y costos",
  },
  {
    id: "CII-2100",
    nombre: "Introducción a la economía",
  },
  {
    id: "CBF-1002",
    nombre: "Electricidad y magnetismo",
  },
  {
    id: "CBE-2000",
    nombre: "Probabilidad y estadística - Industrial",
  },
  {
    id: "CII-2401",
    nombre: "Mecánica de fluidos - Industrial",
  },
  {
    id: "CII-2751",
    nombre: "Inferencia estadística",
  },
  {
    id: "CII-1001",
    nombre: "Teoría organizacional",
  },
  {
    id: "CII-2501",
    nombre: "Bases de datos - Industrial",
  },
  {
    id: "CII-2402",
    nombre: "Termodinámica",
  },
  {
    id: "CII-2755",
    nombre: "Modelos estocásticos",
  },
  {
    id: "CII-2101",
    nombre: "Microeconomía",
  },
  {
    id: "CII-2002",
    nombre: "Ingeniería económica",
  },
  {
    id: "CII-2656",
    nombre: "Econometría",
  },
  {
    id: "CII-2403",
    nombre: "Proyetos energéticos",
  },
  {
    id: "CII-2253",
    nombre: "Producción",
  },
  {
    id: "CII-2102",
    nombre: "Marketing",
  },
  {
    id: "CII-2003",
    nombre: "Finanzas",
  },
  {
    id: "CII-2504",
    nombre: "Data Science - Industrial",
  },
  {
    id: "CII-2757",
    nombre: "Simulación",
  },
  {
    id: "CII-2254",
    nombre: "Logística",
  },
  {
    id: "CII-2103",
    nombre: "Gestión estrategica",
  },
  {
    id: "COC2001",
    nombre: "Ingeniería de materiales",
  },
  {
    id: "COC-2200",
    nombre: "Mecánica de fluidos - Obras Civiles",
  },
  {
    id: "COC-2101",
    nombre: "Mecánica de Sólidos",
  },
  {
    id: "COC-2002",
    nombre: "Edificación",
  },
  {
    id: "COC-2201",
    nombre: "Hidráulica",
  },
  {
    id: "COC-2001",
    nombre: "Topografía",
  },
  {
    id: "COC-2102",
    nombre: "Análisis estructural",
  },
  {
    id: "COC-2203",
    nombre: "Ingeniería ambiental",
  },
  {
    id: "COC-2003",
    nombre: "Tecnología del hormigón",
  },
  {
    id: "COC-2103",
    nombre: "Diseño estructural",
  },
  {
    id: "COC-2104",
    nombre: "Mecánica de Suelos",
  },
  {
    id: "COC-2204",
    nombre: "Hidrología",
  },
  {
    id: "COC-2004",
    nombre: "Administración de Proyectos Civiles",
  },
  {
    id: "COC-2105",
    nombre: "Diseño en Hormigón",
  },
  {
    id: "COC-2106",
    nombre: "Fundaciones",
  },
  {
    id: "COC-2205",
    nombre: "Hidráulica urbana",
  },
  {
    id: "COC-2005",
    nombre: "Planificación de Proyectos",
  },
  {
    id: "COC-2107",
    nombre: "Diseño en Acero",
  },
  {
    id: "COC-3100",
    nombre: "Ingeniería Sísmica",
  },
  {
    id: "COC-3000",
    nombre: "Ingeniería de Costos",
  },
  {
    id: "COC-3001",
    nombre: "Diseño de Caminos",
  },
  {
    id: "CII-2250",
    nombre: "Estática - Industrial",
  },
  {
    id: "COC-2100",
    nombre: "Estática - Obras Civiles",
  },
];

const insertRamosInDatabase = async () => {
  console.log(ramos.length);
  for (let i = 0; i < ramos.length; i++) {
    console.log("inserting ramo " + i);
    await pool.query(
      "INSERT INTO ramos (codigo, nombre) VALUES ($1, $2) RETURNING *",
      [ramos[i].id, ramos[i].nombre]
    );
  }
};

insertRamosInDatabase();
