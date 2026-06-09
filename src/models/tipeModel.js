import { prismaClient } from "../database/dbConfig.js";

const tipeModel = {
  
  async getAll() {
    return await prismaClient.tipe_kamar.findMany({
      orderBy: { id_tipe_kamar: "asc" },
    });
  },

  
  async getById(id_tipe_kamar) {
    return await prismaClient.tipe_kamar.findUnique({
      where: { id_tipe_kamar: Number(id_tipe_kamar) },
      include: { kamar: true },
    });
  },

  
  async create({ nama_tipe, harga, fasilitas }) {
    return await prismaClient.tipe_kamar.create({
      data: {
        nama_tipe,
        harga,
        fasilitas,
      },
    });
  },

  
  async update(id_tipe_kamar, { nama_tipe, harga, fasilitas }) {
    return await prismaClient.tipe_kamar.update({
      where: { id_tipe_kamar: Number(id_tipe_kamar) },
      data: {
        nama_tipe,
        harga,
        fasilitas,
      },
    });
  },

  
  async delete(id_tipe_kamar) {
    return await prismaClient.tipe_kamar.delete({
      where: { id_tipe_kamar: Number(id_tipe_kamar) },
    });
  },
};

export default tipeModel;