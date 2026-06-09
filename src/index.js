import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/api.js'; // Pastikan Anda mengimpor file routes Anda

import { readFileSync } from 'fs';
import swaggerUi from 'swagger-ui-express';

dotenv.config();
const app = express();
const port = process.env.PORT || 2024;

const swaggerDocument = JSON.parse(
  readFileSync(new URL('./docs/openapi.json', import.meta.url))
);

// Middleware agar Express bisa membaca input berupa JSON dari Postman/Frontend 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", routes);

app.use((req, res, next) => {
    res.status(404).json({ error : "Endpoint tidak ada"});
});
// Menghubungkan routes (URL API)
// app.use('/api', apiRoutes); 

// Rute dasar untuk mengecek server menyala
app.get('/', (req, res) => {
    res.json({ message: "Rodok danga!" });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`[Server] Aplikasi berjalan di http://localhost:${port}`);
    console.log(`[Docs] Dokumentasi API tersedia di http://localhost:${port}/api-docs`);
});