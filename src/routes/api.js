import express from "express";
// const express = require('express');
const router = express.Router();

// Import Controllers (Logika bisnis backend kamu)
// const authController = require('../controllers/authController');
import authController from '../controllers/authController.js';
import tamuController from '../controllers/tamuController.js'; 
// const tamuController = require('../controllers/tamuController.js');
import kamarController from '../controllers/kamarController.js';
// const kamarController = require('../controllers/kamarController.js');
import reservasiController from '../controllers/reservasiController.js'; 
import karyawanController from '../controllers/karyawanController.js';
// const reservasiController = require('../controllers/reservasiController.js');


// Import Middleware untuk Proteksi & Hak Akses
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js';
// const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// ==========================================
// 1. ROUTING KARYAWAN & AUTH
// ==========================================
// Public routes (Siapa saja bisa akses untuk login)
router.post('/auth/login', authController.login);

// Protected routes (Hanya Admin yang bisa kelola karyawan)
router.post('/karyawan', verifyToken, isAdmin, karyawanController.create);
router.get('/karyawan', verifyToken, isAdmin, karyawanController.getAll);
router.get('/karyawan/:id', verifyToken, isAdmin, karyawanController.getById);
router.put('/karyawan/:id', verifyToken, isAdmin, karyawanController.update);
router.delete('/karyawan/:id', verifyToken, isAdmin, karyawanController.destroy);


// ==========================================
// 2. ROUTING TAMU (Bisa diakses Admin & Resepsionis)
// ==========================================
router.post('/tamu', verifyToken, tamuController.create);
router.get('/tamu', verifyToken, tamuController.getAll);
router.get('/tamu/:id', verifyToken, tamuController.getById);
router.put('/tamu/:id', verifyToken, tamuController.update);
router.delete('/tamu/:id', verifyToken, isAdmin, tamuController.destroy); // Hanya admin yang boleh hapus data


// ==========================================
// 3. ROUTING TIPE KAMAR & KAMAR
// ==========================================
// Tipe Kamar
router.get('/tipe-kamar', verifyToken, kamarController.getAll);
router.get('/tipe-kamar/:id', verifyToken, kamarController.getById);
router.post('/tipe-kamar', verifyToken, isAdmin, kamarController.create); // Hanya Admin
router.put('/tipe-kamar/:id', verifyToken, isAdmin, kamarController.update); // Hanya Admin
router.delete('/tipe-kamar/:id', verifyToken, isAdmin, kamarController.destroy); // Hanya Admin

// Kamar

router.get('/kamar', verifyToken, kamarController.getAll);
router.get('/kamar/status/:status', verifyToken, kamarController.getByKamarStatus); // Cek kamar tersedia/terisi
router.get('/kamar/:id', verifyToken, kamarController.getById);
router.post('/kamar', verifyToken, isAdmin, kamarController.create); // Hanya Admin
router.put('/kamar/:id', verifyToken, isAdmin, kamarController.update); // Hanya Admin
router.delete('/kamar/:id', verifyToken, isAdmin, kamarController.destroy); // Hanya Admin


// ==========================================
// 4. ROUTING RESERVASI (Inti dari Aplikasi Hotel)
// ==========================================
router.post('/reservasi', verifyToken, reservasiController.create); // Proses Booking
router.get('/reservasi', verifyToken, reservasiController.getAll);
router.get('/reservasi/:id', verifyToken, reservasiController.getById);
router.put('/reservasi/:id', verifyToken, reservasiController.update);
router.delete('/reservasi/:id', verifyToken, reservasiController.destroy);

// Update Status khusus (Check-In, Check-Out, Batal) sesuai ENUM di database kamu
router.patch('/reservasi/:id/status', verifyToken, reservasiController.updateStatusReservasi); 

// module.exports = router;

export default router;