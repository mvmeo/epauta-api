CREATE TABLE "estudiantes" (
  "id" serial PRIMARY KEY,
  "nombre" varchar,
  "apellido" varchar,
  "correo" varchar,
  "password" varchar,
  "carrera" varchar
);

CREATE TABLE "material" (
  "id" serial PRIMARY KEY,
  "tipo" varchar,
  "nro_version" int,
  "anio" int,
  "semestre" int,
  "descripcion" varchar(255),
  "fecha_subida" date
);

CREATE TABLE "likes_material" (
  "id_material" int,
  "id_estudiante" int,
  PRIMARY KEY ("id_material", "id_estudiante")
);

CREATE TABLE "estudiantes_materiales_pendiente" (
  "id_estudiante" int,
  "id_material" int,
  PRIMARY KEY ("id_estudiante", "id_material")
);

CREATE TABLE "tags" (
  "id" serial PRIMARY KEY,
  "id_material" int,
  "nombre" varchar
);

CREATE TABLE "ramos" (
  "nombre" varchar PRIMARY KEY,
  "programa_estudio" varchar,
  "descripcion" text,
  "creditos" int
);

CREATE TABLE "prerequisitos" (
  "id" serial PRIMARY KEY,
  "origen" varchar,
  "prerequisito" varchar
);

CREATE TABLE "estudiantes_ramos_favoritos" (
  "id_estudiante" int,
  "nombre_ramo" varchar,
  PRIMARY KEY ("id_estudiante", "nombre_ramo")
);

CREATE TABLE "carreras" (
  "nombre" varchar PRIMARY KEY,
  "malla" varchar
);

CREATE TABLE "profesores" (
  "id" serial PRIMARY KEY,
  "nombre" varchar,
  "apellido" varchar,
  "correo" varchar
);

CREATE TABLE "stars_profesores" (
  "id_profesor" int,
  "id_estudiante" int,
  PRIMARY KEY ("id_profesor", "id_estudiante")
);

CREATE TABLE "posts" (
  "id" serial PRIMARY KEY,
  "id_estudiante" int,
  "titulo" varchar,
  "descripcion" varchar(255),
  "fecha_creacion" date
);

CREATE TABLE "respuestas" (
  "id" serial PRIMARY KEY,
  "id_post" int,
  "descripcion" varchar(255),
  "id_estudiante" int,
  "fecha_creacion" date
);

CREATE TABLE "likes_respuestas" (
  "id_respuesta" int,
  "id_estudiante" int,
  PRIMARY KEY ("id_respuesta", "id_estudiante")
);

CREATE TABLE "ramos_profesores" (
  "id_profesor" int,
  "nombre_ramo" varchar,
  PRIMARY KEY ("id_profesor", "nombre_ramo")
);

ALTER TABLE "estudiantes"
ADD CONSTRAINT "carrera_estudiantes"
FOREIGN KEY ("carrera")
REFERENCES "carreras" ("nombre");

ALTER TABLE "estudiantes_ramos_favoritos"
ADD FOREIGN KEY ("id_estudiante")
REFERENCES "estudiantes" ("id");

ALTER TABLE "estudiantes_ramos_favoritos"
ADD FOREIGN KEY ("nombre_ramo")
REFERENCES "ramos" ("nombre");

ALTER TABLE "posts"
ADD CONSTRAINT "post_by_estudiante"
FOREIGN KEY ("id_estudiante")
REFERENCES "estudiantes" ("id");

ALTER TABLE "respuestas"
ADD CONSTRAINT "respuestas_by_post"
FOREIGN KEY ("id_post")
REFERENCES "posts" ("id");

ALTER TABLE "prerequisitos"
ADD FOREIGN KEY ("origen")
REFERENCES "ramos" ("nombre");

ALTER TABLE "stars_profesores"
ADD FOREIGN KEY ("id_profesor")
REFERENCES "profesores" ("id");

ALTER TABLE "stars_profesores"
ADD FOREIGN KEY ("id_estudiante")
REFERENCES "estudiantes" ("id");