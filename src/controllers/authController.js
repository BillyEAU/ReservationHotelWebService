import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import karyawanModel from "../models/karyawanModel.js"; // Gunakan model agar konsisten dengan karyawanController

const authController = {
    
    async login(req, res, next) {
   
    try {
      // 1. Ambil username (bukan email) dan password sesuai skema login kamu
      const { username, password } = req.body;
      if (!username || !password) {
          return res.status(400).json({ status: false, error: "Username dan password wajib diisi" });
        }
        
        // 2. Cari karyawan berdasarkan username via model
        const user = await karyawanModel.getByUsername(username);
        // Jika user tidak ditemukan
        console.log(user);
      if (!user) {
        return res.status(404).json({ status: false, error: "Username Karyawan tidak ditemukan" });
      }

      // 3. Validasi Password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ status: false, error: "Password Salah" });
      }

      // 4. Generate Token dengan data payload yang sesuai dengan SKEMA DB & MIDDLEWARE
      const secretKey = process.env.JWT_SECRET || 'RAHASIA_SUPER_AWESOME_KAMU';
      const token = jwt.sign(
        { 
          id_karyawan: user.id_karyawan, // Sesuai nama kolom DB
          username: user.username,
          role: user.role // KRUSIAL: Dibutuhkan oleh middleware isAdmin
        }, 
        secretKey, 
        { expiresIn: "1d" }
      );

      // 5. Kembalikan Response JSON yang rapi
      return res.status(200).json({
        status: true,
        message: "Login Berhasil",
        data: {
          id_karyawan: user.id_karyawan,
          nama_karyawan: user.nama_karyawan,
          username: user.username,
          role: user.role,
          token: token,
        },
      });

    } catch (error) {
      // Error handling agar server tidak crash
      return res.status(500).json({ status: false, error: error.message || error });
    }
  },
};

export default authController;