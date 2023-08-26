import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

import authRoutes from './routes/auth.routes.js';
import estudianteRoutes from './routes/estudiantes.routes.js';
import materialRoutes from './routes/material.routes.js';
import postsRoutes from './routes/posts.routes.js';
import profesoresRoutes from './routes/profesores.routes.js';
import ramosRoutes from './routes/ramos.routes.js';
import respuestasRoutes from './routes/respuestas.routes.js';

const allowedOrigins = ['http://localhost:5173', 'https://epauta.vercel.app/'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.json({ message: 'API de ePAUTA. Plataforma para facilitar el estudio e intercambio de información a los estudiantes.' });
});
app.use('/api', authRoutes);
app.use('/api', estudianteRoutes);
app.use('/api/material', materialRoutes);
app.use('/api', postsRoutes);
app.use('/api', profesoresRoutes);
app.use('/api/ramos', ramosRoutes);
app.use('/api', respuestasRoutes);


dotenv.config();

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));