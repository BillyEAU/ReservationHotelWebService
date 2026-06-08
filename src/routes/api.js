const express = require('express');
const router = express.Router();

// Import Controllers (Logika bisnis backend kamu)
const authController = require('../controllers/authController');
const tamuController = require('../src/controllers/tamuController');
const kamarController = require('../controllers/kamarController');
const reservasiController = require('../controllers/reservasiController');

// Import Middleware untuk Proteksi & Hak Akses
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// ==========================================
// 1. ROUTING KARYAWAN & AUTH
// ==========================================
// Public routes (Siapa saja bisa akses untuk login)
router.post('/auth/login', authController.login);

// Protected routes (Hanya Admin yang bisa kelola karyawan)
router.post('/karyawan', verifyToken, isAdmin, authController.registerKaryawan);
router.get('/karyawan', verifyToken, isAdmin, authController.getAllKaryawan);
router.get('/karyawan/:id', verifyToken, isAdmin, authController.getKaryawanById);
router.put('/karyawan/:id', verifyToken, isAdmin, authController.updateKaryawan);
router.delete('/karyawan/:id', verifyToken, isAdmin, authController.deleteKaryawan);


// ==========================================
// 2. ROUTING TAMU (Bisa diakses Admin & Resepsionis)
// ==========================================
router.post('/tamu', verifyToken, tamuController.createTamu);
router.get('/tamu', verifyToken, tamuController.getAllTamu);
router.get('/tamu/:id', verifyToken, tamuController.getTamuById);
router.put('/tamu/:id', verifyToken, tamuController.updateTamu);
router.delete('/tamu/:id', verifyToken, isAdmin, tamuController.deleteTamu); // Hanya admin yang boleh hapus data


// ==========================================
// 3. ROUTING TIPE KAMAR & KAMAR
// ==========================================
// Tipe Kamar
router.get('/tipe-kamar', verifyToken, kamarController.getAllTipe);
router.get('/tipe-kamar/:id', verifyToken, kamarController.getTipeById);
router.post('/tipe-kamar', verifyToken, isAdmin, kamarController.createTipe); // Hanya Admin
router.put('/tipe-kamar/:id', verifyToken, isAdmin, kamarController.updateTipe); // Hanya Admin
router.delete('/tipe-kamar/:id', verifyToken, isAdmin, kamarController.deleteTipe); // Hanya Admin

// Kamar
router.get('/kamar', verifyToken, kamarController.getAllKamar);
router.get('/kamar/status/:status', verifyToken, kamarController.getKamarByStatus); // Cek kamar tersedia/terisi
router.get('/kamar/:id', verifyToken, kamarController.getKamarById);
router.post('/kamar', verifyToken, isAdmin, kamarController.createKamar); // Hanya Admin
router.put('/kamar/:id', verifyToken, isAdmin, kamarController.updateKamar); // Hanya Admin
router.delete('/kamar/:id', verifyToken, isAdmin, kamarController.deleteKamar); // Hanya Admin


// ==========================================
// 4. ROUTING RESERVASI (Inti dari Aplikasi Hotel)
// ==========================================
router.post('/reservasi', verifyToken, reservasiController.createReservasi); // Proses Booking
router.get('/reservasi', verifyToken, reservasiController.getAllReservasi);
router.get('/reservasi/:id', verifyToken, reservasiController.getReservasiById);

// Update Status khusus (Check-In, Check-Out, Batal) sesuai ENUM di database kamu
router.patch('/reservasi/:id/status', verifyToken, reservasiController.updateStatusReservasi); 

module.exports = router;