import express from 'express';
import dotenv from 'dotenv';
// import apiRoutes from './routes/api.js'; // Pastikan Anda mengimpor file routes Anda

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Server Web Service Hotel Berjalan Lancar!" });
});

app.listen(port, () => {
    console.log(`[Server] Aplikasi berjalan di http://localhost:${port}`);
});