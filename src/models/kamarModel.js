import { prismaClient } from "../database/dbConfig.js";

const kamarModel = {
  async getAll() {
    return await prismaClient.kamar.findMany({
      include: { tipe_kamar: true },
      orderBy: { nomor_kamar: "asc" },
    });
  },
  async getById(id_kamar) {
    return await prismaClient.kamar.findUnique({
      where: { id_kamar: Number(id_kamar) },
      include: { tipe_kamar: true },
    });
  },

  async getByStatus(status) {
    return await prismaClient.kamar.findMany({
      where: { status },
      include: { tipe_kamar: true },
      orderBy: { nomor_kamar: "asc" },
    });
  },

  async create({ id_tipe_kamar, nomor_kamar, status }) {
    return await prismaClient.kamar.create({
      data: {
        id_tipe_kamar: Number(id_tipe_kamar),
        nomor_kamar,
        status: status ?? "Tersedia",
      },
      include: { tipe_kamar: true },
    });
  },


  async update(id_kamar, { id_tipe_kamar, nomor_kamar, status }) {
    return await prismaClient.kamar.update({
      where: { id_kamar: Number(id_kamar) },
      data: {
        ...(id_tipe_kamar !== undefined && { id_tipe_kamar: Number(id_tipe_kamar) }),
        ...(nomor_kamar !== undefined && { nomor_kamar }),
        ...(status !== undefined && { status }),
      },
      include: { tipe_kamar: true },
    });
  },

 
  async updateStatus(id_kamar, status) {
    return await prismaClient.kamar.update({
      where: { id_kamar: Number(id_kamar) },
      data: { status },
    });
  },

 
  async delete(id_kamar) {
    return await prismaClient.kamar.delete({
      where: { id_kamar: Number(id_kamar) },
    });
  },
};

export default kamarModel;