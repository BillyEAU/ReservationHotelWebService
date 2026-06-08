import { prismaClient } from "../database/dbConfig.js";

const tamuModel = {
  async getAll() {
    return await prismaClient.tamu.findMany({
      orderBy: { id_tamu: "asc" },
    });
  },

  
  async getById(id_tamu) {
    return await prismaClient.tamu.findUnique({
      where: { id_tamu: Number(id_tamu) },
      include: {
        reservasi: {
          include: {
            kamar: { include: { tipe_kamar: true } },
          },
          orderBy: { tgl_reservasi: "desc" },
        },
      },
    });
  },

  
  async getByNoHp(no_hp) {
    return await prismaClient.tamu.findFirst({
      where: { no_hp },
    });
  },

  
  async searchByNama(keyword) {
    return await prismaClient.tamu.findMany({
      where: {
        nama: { contains: keyword },
      },
      orderBy: { nama: "asc" },
    });
  },

  
  async create({ nama, no_hp, alamat }) {
    return await prismaClient.tamu.create({
      data: { nama, no_hp, alamat },
    });
  },

  
  async update(id_tamu, { nama, no_hp, alamat }) {
    return await prismaClient.tamu.update({
      where: { id_tamu: Number(id_tamu) },
      data: {
        ...(nama !== undefined && { nama }),
        ...(no_hp !== undefined && { no_hp }),
        ...(alamat !== undefined && { alamat }),
      },
    });
  },

  
  async delete(id_tamu) {
    return await prismaClient.tamu.delete({
      where: { id_tamu: Number(id_tamu) },
    });
  },
};

export default tamuModel;