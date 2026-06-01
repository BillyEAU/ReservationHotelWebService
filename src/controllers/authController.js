import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Jika di file dbConfig.js Anda sudah meng-inisialisasi PrismaClient, 
// Anda bisa langsung import instance-nya. 
// Tapi untuk amannya, kita inisialisasi di sini:
const prisma = new PrismaClient();

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1. Cek apakah username dan password dikirim
        if (!username || !password) {
            return res.status(400).json({ 
                status: "error", 
                message: "Username dan password wajib diisi" 
            });
        }

        // 2. Cari data karyawan berdasarkan username
        const karyawan = await prisma.karyawan.findUnique({
            where: { username: username }
        });

        // Jika karyawan tidak ditemukan
        if (!karyawan) {
            return res.status(404).json({ 
                status: "error", 
                message: "Username tidak ditemukan" 
            });
        }

        // 3. Bandingkan password yang diinput dengan password di database
        // Parameter pertama: password plain text dari user (req.body)
        // Parameter kedua: password hash dari database
        const isPasswordValid = await bcrypt.compare(password, karyawan.password);

        // Jika password salah
        if (!isPasswordValid) {
            return res.status(401).json({ 
                status: "error", 
                message: "Password yang Anda masukkan salah" 
            });
        }

        // 4. Buat JWT Token jika login berhasil
        // Sangat disarankan menaruh secret key ini di file .env (misal: process.env.JWT_SECRET)
        const secretKey = process.env.JWT_SECRET || "rahasia_hotel_super_aman_123"; 
        
        const token = jwt.sign(
            {
                id_karyawan: karyawan.id_karyawan,
                username: karyawan.username,
                role: karyawan.role
            },
            secretKey,
            { expiresIn: "1d" } // Token berlaku selama 1 hari
        );

        // 5. Kirim response sukses beserta token
        res.status(200).json({
            status: "success",
            message: "Login berhasil",
            token: token,
            data: {
                id_karyawan: karyawan.id_karyawan,
                nama_karyawan: karyawan.nama_karyawan,
                role: karyawan.role
            }
        });

    } catch (error) {
        res.status(500).json({ 
            status: "error", 
            message: error.message 
        });
    }
};