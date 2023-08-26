import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
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

export const register = async (req, res) => {
  const { nombre, apellido, correo, carrera, password } = req.body;

  try {
    // valida que no exista el rut ni el correo

    const userFound = await pool.query(
      "SELECT * FROM estudiantes WHERE correo = $1",
      [correo]
    );
    if (userFound.rows.length > 0) {
      return res
        .status(400)
        .json(["El usuario ya existe. Ingresa otro correo electrónico."]);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    pool.query(
      "INSERT INTO estudiantes (nombre, apellido, correo, carrera, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [nombre, apellido, correo, carrera, passwordHash],
      async (error, results) => {
        if (error) throw error;

        const newEstudiante = {
          id: results.rows[0].id,
          nombre: results.rows[0].nombre,
          apellido: results.rows[0].apellido,
          correo: results.rows[0].correo,
          carrera: results.rows[0].carrera,
        };

        const id = results.rows[0].id.toString();
        const token = await createAccessToken(id);
        res.status(201).cookie("token", token).json(newEstudiante);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    pool.query(
      "SELECT * FROM estudiantes WHERE correo = $1",
      [correo],
      async (error, results) => {
        if (error) throw error;

        if (results.rows.length === 0) {
          return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(
          password,
          results.rows[0].password
        );
        if (!isMatch) {
          return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const User = {
          id: results.rows[0].id,
          nombre: results.rows[0].nombre,
          apellido: results.rows[0].apellido,
          correo: results.rows[0].correo,
          carrera: results.rows[0].carrera,
        };

        const id = results.rows[0].id.toString();
        const token = await createAccessToken(id);
        res.status(201).cookie("token", token).json(User);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
};

export const profile = (req, res) => {
  const id = req.user;

  pool.query(
    "SELECT * FROM estudiantes WHERE id = $1",
    [id],
    (error, results) => {
      if (error) throw error;

      const Estudiante = {
        id: results.rows[0].id,
        nombre: results.rows[0].nombre,
        apellido: results.rows[0].apellido,
        correo: results.rows[0].correo,
        carrera: results.rows[0].carrera,
      };

      res.status(200).json(Estudiante);
    }
  );
};

export const changePassword = async (req, res) => {
  const { id, password, newPassword } = req.body;

  try {
    pool.query(
      "SELECT * FROM estudiantes WHERE id = $1",
      [id],
      async (error, results) => {
        if (error) throw error;

        const isMatch = await bcrypt.compare(
          password,
          results.rows[0].password
        );
        if (!isMatch) {
          return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        pool.query(
          "UPDATE estudiantes SET password = $1 WHERE id = $2",
          [hashedPassword, id],
          (error, results) => {
            if (error) throw error;

            res.status(200).json({ message: "Contraseña actualizada" });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    req.user = user.id;

    pool.query(
      "SELECT * FROM estudiantes WHERE id = $1",
      [user],
      (error, results) => {
        if (error) throw error;

        const Estudiante = {
          id: results.rows[0].id,
          nombre: results.rows[0].nombre,
          apellido: results.rows[0].apellido,
          correo: results.rows[0].correo,
          carrera: results.rows[0].carrera,
        };

        res.status(200).json(Estudiante);
      }
    );
  });
};
