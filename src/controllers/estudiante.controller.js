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

export const getEstudiantes = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM estudiantes");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

