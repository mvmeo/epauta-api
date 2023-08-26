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

export const getMaterial = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM material");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMaterialByRamo = async (req, res) => {
  const slug = req.params.slug;
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;
  try {
    if (page != undefined || limit != undefined) {
      const countResult = await pool.query("SELECT COUNT(*) FROM estudiantes");
      const totalCount = countResult.rows[0].count;

      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 ORDER BY id DESC LIMIT $2 OFFSET $3",
        [slug, limit, offset]
      );

      const totalPages = Math.ceil(totalCount / limit);

      res
        .status(200)
        .json({ totalPages, currentPage: page, material: response.rows });
    } else {
      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 ORDER BY id DESC",
        [slug]
      );
      console.log(page, limit);
      res.status(200).json({ material: response.rows });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMaterialById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query("SELECT * FROM material WHERE id = $1", [
      id,
    ]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMaterialByUserId = async (req, res) => {
  const userId = parseInt(req.params.user_id);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id_estudiante = $1",
      [userId]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMaterial = async (req, res) => {
  const {
    tipo,
    año,
    semestre,
    descripcion,
    archivo,
    idRamo,
    tags,
    idEstudiante,
  } = req.body;

  try {
    const linkFound = await pool.query(
      "SELECT * FROM material WHERE archivo = $1",
      [archivo]
    );
    if (linkFound.rows.length > 0) {
      return res
        .status(400)
        .json(["El enlace al archivo ya existe. Intente con otro."]);
    }

    pool.query(
      "INSERT INTO material (tipo, anio, semestre, descripcion, archivo, id_ramo, tags, id_estudiante) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [tipo, año, semestre, descripcion, archivo, idRamo, tags, idEstudiante]
    );
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMaterial = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await pool.query("DELETE FROM material WHERE id = $1", [id]);
    res.status(200).json({ message: "Material eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//TIPOS DE MATERIAL

export const ayudantiasByRamo = async (req, res) => {
  const slug = req.params.slug;
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;
  try {
    if (page != undefined || limit != undefined) {
      const countResult = await pool.query("SELECT COUNT(*) FROM estudiantes");
      const totalCount = countResult.rows[0].count;

      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Ayud%' ORDER BY id DESC LIMIT $2 OFFSET $3",
        [slug, limit, offset]
      );

      const totalPages = Math.ceil(totalCount / limit);
      console.log(page, limit, offset);

      res
        .status(200)
        .json({ totalPages, currentPage: page, ayudantias: response.rows });
    } else {
      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Ayud%' ORDER BY id DESC",
        [slug]
      );
      console.log(page, limit);
      res.status(200).json({ ayudantias: response.rows });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const controlesByRamo = async (req, res) => {
  const slug = req.params.slug;
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;

  try {
    if (page != undefined || limit != undefined) {
      const countResult = await pool.query("SELECT COUNT(*) FROM estudiantes");
      const totalCount = countResult.rows[0].count;

      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Control%' ORDER BY id DESC LIMIT $2 OFFSET $3",
        [slug, limit, offset]
      );

      const totalPages = Math.ceil(totalCount / limit);

      res
        .status(200)
        .json({ totalPages, currentPage: page, controles: response.rows });
    } else {
      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Control%' ORDER BY id DESC",
        [slug]
      );
      res.status(200).json({ controles: response.rows });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const solemnesByRamo = async (req, res) => {
  const slug = req.params.slug;
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;

  try {
    if (page != undefined || limit != undefined) {
      const countResult = await pool.query("SELECT COUNT(*) FROM estudiantes");
      const totalCount = countResult.rows[0].count;

      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Solemne%' ORDER BY id DESC LIMIT $2 OFFSET $3",
        [slug, limit, offset]
      );

      const totalPages = Math.ceil(totalCount / limit);

      res
        .status(200)
        .json({ totalPages, currentPage: page, solemnes: response.rows });
    } else {
      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Solemne%' ORDER BY id DESC",
        [slug]
      );
      res.status(200).json({ solemnes: response.rows });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const examanesByRamo = async (req, res) => {
  const slug = req.params.slug;
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;

  try {
    if (page != undefined || limit != undefined) {
      const countResult = await pool.query("SELECT COUNT(*) FROM estudiantes");
      const totalCount = countResult.rows[0].count;

      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Examen%' ORDER BY id DESC LIMIT $2 OFFSET $3",
        [slug, limit, offset]
      );

      const totalPages = Math.ceil(totalCount / limit);

      res
        .status(200)
        .json({ totalPages, currentPage: page, examenes: response.rows });
    } else {
      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Examen%' ORDER BY id DESC",
        [slug]
      );
      res.status(200).json({ examenes: response.rows });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const otrosByRamo = async (req, res) => {
  const slug = req.params.slug;
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;

  try {
    if (page != undefined || limit != undefined) {
      const countResult = await pool.query("SELECT COUNT(*) FROM estudiantes");
      const totalCount = countResult.rows[0].count;

      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Otro%' ORDER BY id DESC LIMIT $2 OFFSET $3",
        [slug, limit, offset]
      );

      const totalPages = Math.ceil(totalCount / limit);

      res
        .status(200)
        .json({ totalPages, currentPage: page, otros: response.rows });
    } else {
      const response = await pool.query(
        "SELECT * FROM material WHERE id_ramo = $1 AND tipo LIKE '%Otro%' ORDER BY id DESC",
        [slug]
      );
      res.status(200).json({ otros: response.rows });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//TIPOS DE MATERIAL POR ID

export const ayudantiasIdByRamo = async (req, res) => {
  const slug = req.params.slug;
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id_ramo = $1 AND tipo = 'ayudantia' AND id = $2",
      [slug, id]
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const controlesIdByRamo = async (req, res) => {
  const slug = req.params.slug;
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id_ramo = $1 AND tipo = 'control' AND id = $2",
      [slug, id]
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const solemnesIdByRamo = async (req, res) => {
  const slug = req.params.slug;
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id_ramo = $1 AND tipo = 'solemne' AND id = $2",
      [slug, id]
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const examanesIdByRamo = async (req, res) => {
  const slug = req.params.slug;
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id_ramo = $1 AND tipo = 'examen' AND id = $2",
      [slug, id]
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const otrosIdByRamo = async (req, res) => {
  const slug = req.params.slug;
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id_ramo = $1 AND tipo = 'otro' AND id = $2",
      [slug, id]
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// MATERIAL PENDIENTE

export const getMaterialPendienteByUserId = async (req, res) => {
  const id = parseInt(req.params.id_estudiante);
  try {
    const response = await pool.query(
      "SELECT * FROM material WHERE id IN (SELECT id_material FROM estudiantes_materiales_pendiente WHERE id_estudiante = $1)",
      [id]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMaterialPendienteByUserIdAndMaterialId = async (req, res) => {
  const idEstudiante = parseInt(req.params.id_estudiante);
  const idMaterial = parseInt(req.params.id_material);
  try {
    const response = await pool.query(
      "SELECT * FROM estudiantes_materiales_pendiente WHERE id_estudiante = $1 AND id_material = $2",
      [idEstudiante, idMaterial]
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMaterialPendiente = async (req, res) => {
  const { idEstudiante, idMaterial } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO estudiantes_materiales_pendiente (id_estudiante, id_material) VALUES ($1, $2) RETURNING *",
      [idEstudiante, idMaterial]
    );
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMaterialPendiente = async (req, res) => {
  const { idEstudiante, idMaterial } = req.body;
  try {
    await pool.query(
      "DELETE FROM estudiantes_materiales_pendiente WHERE id_estudiante = $1 AND id_material = $2",
      [idEstudiante, idMaterial]
    );
    res.status(200).json({ message: "Material pendiente eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
