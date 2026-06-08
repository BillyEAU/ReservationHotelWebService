import express from 'express';
import dotenv from 'dotenv';
// import apiRoutes from './routes/api.js'; // Pastikan Anda mengimpor file routes Anda

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware agar Express bisa membaca input berupa JSON dari Postman/Frontend 
//wok wowok ini gua bingung wok
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menghubungkan routes (URL API)
// app.use('/api', apiRoutes); 

// Rute dasar untuk mengecek server menyala
app.get('/', (req, res) => {
    res.json({ message: "Rodok danga!" });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`[Server] Aplikasi berjalan di http://localhost:${port}`);
});