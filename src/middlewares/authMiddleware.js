import jwt from 'jsonwebtoken';

// 1. Middleware untuk memverifikasi apakah Token JWT valid
export const verifyToken = (req, res, next) => {
  // Mengambil token dari header 'Authorization' (Format umum: Bearer <TOKEN>)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Jika token tidak disertakan di header
  if (!token) {
    return res.status(401).json({ 
      status: false,
      error: "Akses ditolak. Token tidak ditemukan, silakan login terlebih dahulu." 
    });
  }

  try { 
    // Verifikasi token menggunakan Secret Key (disarankan disimpan di file .env)
    const secretKey = process.env.JWT_SECRET || 'RAHASIA_SUPER_AWESOME_KAMU';
    const decoded = jwt.verify(token, secretKey);
    
    // Menyimpan data karyawan yang didecode (id_karyawan, username, role) ke dalam object `req.user`
    // Supaya bisa diakses oleh middleware selanjutnya atau controller
    req.user = decoded; 
    
    next(); // Lanjut ke middleware berikutnya atau ke controller
  } catch (error) {
    return res.status(403).json({ 
      status: false,
      error: "Token tidak valid atau telah kedaluwarsa." 
    });
  }
};

// 2. Middleware untuk mengecek apakah user memiliki role 'Admin'
export const isAdmin = (req, res, next) => {
  // Pastikan verifyToken dijalankan lebih dulu sebelum middleware ini, 
  // karena kita butuh data req.user
  if (!req.user) {
    return res.status(500).json({ 
      status: false,
      error: "Internal Server Error: Data user tidak ditemukan di session request." 
    });
  }

  // Cek apakah role-nya sesuai dengan ENUM 'Admin' di database kamu
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ 
      status: false,
      error: "Akses ditolak. Hak akses khusus untuk Admin." 
    });
  }

  next(); // Jika dia Admin, izinkan lanjut ke controller
};