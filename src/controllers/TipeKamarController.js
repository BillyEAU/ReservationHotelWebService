const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TipeKamarController = {
  // GET: Mengambil semua tipe kamar
  getAllTipeKamar: async (req, res) => {
    try {
      const data = await prisma.tipe_Kamar.findMany();
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // GET: Mengambil tipe kamar berdasarkan ID
  getTipeKamarById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await prisma.tipe_Kamar.findUnique({
        where: { id_tipe_kamar: id }
      });
      
      if (!data) return res.status(404).json({ status: 'error', message: 'Tipe Kamar tidak ditemukan' });
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // POST: Menambahkan tipe kamar baru
  createTipeKamar: async (req, res) => {
    try {
      const { id_tipe_kamar, nama_tipe, harga, fasilitas } = req.body;

      const newData = await prisma.tipe_Kamar.create({
        data: { id_tipe_kamar, nama_tipe, harga, fasilitas }
      });
      
      res.status(201).json({ status: 'success', message: 'Tipe kamar berhasil ditambahkan', data: newData });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // PUT: Mengupdate data tipe kamar (misal: update harga)
  updateTipeKamar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_tipe, harga, fasilitas } = req.body;

      const updatedData = await prisma.tipe_Kamar.update({
        where: { id_tipe_kamar: id },
        data: { nama_tipe, harga, fasilitas }
      });

      res.status(200).json({ status: 'success', message: 'Data tipe kamar diperbarui', data: updatedData });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // DELETE: Menghapus tipe kamar
  deleteTipeKamar: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.tipe_Kamar.delete({
        where: { id_tipe_kamar: id }
      });
      res.status(200).json({ status: 'success', message: 'Tipe kamar berhasil dihapus' });
    } catch (error) {
      if (error.code === 'P2003') {
        return res.status(400).json({ status: 'error', message: 'Tipe kamar tidak bisa dihapus karena sedang digunakan oleh data Kamar.' });
      }
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = TipeKamarController;