const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TamuController = {
  // GET: Mengambil semua data tamu
  getAllTamu: async (req, res) => {
    try {
      const data = await prisma.tamu.findMany();
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // GET: Mengambil data tamu berdasarkan ID
  getTamuById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await prisma.tamu.findUnique({
        where: { id_tamu: id }
      });
      
      if (!data) return res.status(404).json({ status: 'error', message: 'Tamu tidak ditemukan' });
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // POST: Menambahkan data tamu baru
  createTamu: async (req, res) => {
    try {
      const { id_tamu, nama, no_hp, alamat } = req.body;

      const newData = await prisma.tamu.create({
        data: { id_tamu, nama, no_hp, alamat }
      });
      
      res.status(201).json({ status: 'success', message: 'Tamu berhasil ditambahkan', data: newData });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // PUT: Mengupdate data tamu
  updateTamu: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, no_hp, alamat } = req.body;

      const updatedData = await prisma.tamu.update({
        where: { id_tamu: id },
        data: { nama, no_hp, alamat }
      });

      res.status(200).json({ status: 'success', message: 'Data tamu diperbarui', data: updatedData });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // DELETE: Menghapus data tamu
  deleteTamu: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.tamu.delete({
        where: { id_tamu: id }
      });
      res.status(200).json({ status: 'success', message: 'Tamu berhasil dihapus' });
    } catch (error) {
      if (error.code === 'P2003') {
        return res.status(400).json({ status: 'error', message: 'Data tamu tidak bisa dihapus karena masih memiliki riwayat reservasi.' });
      }
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = TamuController;