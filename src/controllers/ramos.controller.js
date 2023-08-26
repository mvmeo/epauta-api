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

export const getRamos = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM ramos");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRamoByCodigo = async (req, res) => {
  const codigo = req.params.codigo;
  try {
    const response = await pool.query("SELECT * FROM ramos WHERE codigo = $1", [
      codigo,
    ]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRamosFavoritosByEstudianteId = async (req, res) => {
  const idEstudiante = req.params.id_estudiante;
  try {
    const response = await pool.query(
      "SELECT * FROM estudiantes_ramos_favoritos WHERE id_estudiante = $1",
      [idEstudiante]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addRamoFavorito = async (req, res) => {
  const idEstudiante = req.params.id_estudiante;
  const { codigoRamo } = req.body;
  try {
    const response = await pool.query(
      "INSERT INTO estudiantes_ramos_favoritos (id_estudiante, codigo_ramo) VALUES ($1, $2) RETURNING *",
      [idEstudiante, codigoRamo]
    );
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRamoFavorito = async (req, res) => {
  const idEstudiante = req.params.id_estudiante;
  const { codigoRamo } = req.body;
  try {
    await pool.query(
      "DELETE FROM estudiantes_ramos_favoritos WHERE id_estudiante = $1 AND codigo_ramo = $2",
      [idEstudiante, codigoRamo]
    );
    res.status(200).json({ message: "Ramo eliminado de favoritos" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//inhabilitados
export const getRamosCienciasBasicas = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM ramos WHERE codigo LIKE '%CBM%' AND codigo LIKE '%CBQ%' AND codigo LIKE '%CBF%'"
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRamosInformatica = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM ramos WHERE codigo LIKE '%CIT%'"
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRamosIndustrial = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM ramos WHERE codigo LIKE 'CII%'"
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRamosObrasCiviles = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM ramos WHERE codigo LIKE 'COC%'"
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRamosOtrosComunes = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM ramos WHERE codigo = 'CII-2750' AND codigo = 'CII-1000' AND codigo = 'CII-2100'"
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
