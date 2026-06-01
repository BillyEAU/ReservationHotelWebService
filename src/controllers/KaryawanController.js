const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const bcrypt = require('bcrypt'); // Disarankan menggunakan bcrypt untuk hashing password di produksi

const KaryawanController = {
  // GET: Mengambil semua data karyawan
  getAllKaryawan: async (req, res) => {
    try {
      const data = await prisma.karyawan.findMany({
        select: {
          id_karyawan: true,
          nama_karyawan: true,
          username: true,
          email: true,
          no_hp_karyawan: true,
          role: true
        }
      });
      res.status(200).json({ status: 'sukses', data });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // GET: Mengambil detail karyawan berdasarkan ID
  getKaryawanById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await prisma.karyawan.findUnique({
        where: { id_karyawan: id },
        select: {
          id_karyawan: true,
          nama_karyawan: true,
          username: true,
          email: true,
          no_hp_karyawan: true,
          role: true
        }
      });
      
      if (!data) return res.status(404).json({ status: 'error', message: 'Karyawan tidak ditemukan' });
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // POST: Menambahkan karyawan baru
  createKaryawan: async (req, res) => {
    try {
      const { id_karyawan, nama_karyawan, username, email, password, no_hp_karyawan, role } = req.body;

      // Hashing password disarankan di sini sebelum di-save ke database
      // const hashedPassword = await bcrypt.hash(password, 10);

      const newData = await prisma.karyawan.create({
        data: {
          id_karyawan,
          nama_karyawan,
          username,
          email,
          password, // Gunakan hashedPassword jika memakai bcrypt
          no_hp_karyawan,
          role: role || 'Resepsionis'
        }
      });
      
      res.status(201).json({ status: 'success', message: 'Karyawan berhasil ditambahkan', data: newData });
    } catch (error) {
      // Menangani error jika username sudah digunakan (unique constraint)
      if (error.code === 'P2002') {
        return res.status(400).json({ status: 'error', message: 'Username sudah digunakan' });
      }
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // PUT: Mengupdate data karyawan
  updateKaryawan: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_karyawan, email, no_hp_karyawan, role } = req.body;

      const updatedData = await prisma.karyawan.update({
        where: { id_karyawan: id },
        data: { nama_karyawan, email, no_hp_karyawan, role }
      });

      res.status(200).json({ status: 'success', message: 'Data karyawan diperbarui', data: updatedData });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // DELETE: Menghapus karyawan
  deleteKaryawan: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.karyawan.delete({
        where: { id_karyawan: id }
      });
      res.status(200).json({ status: 'success', message: 'Karyawan berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = KaryawanController;