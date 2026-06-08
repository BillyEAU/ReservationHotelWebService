import { prismaClient } from "../database/dbConfig.js";

const karyawanModel = {

  async getAll() {
    return await prismaClient.karyawan.findMany({
      select: {
        id_karyawan: true,
        nama_karyawan: true,
        username: true,
        email: true,
        no_hp_karyawan: true,
        role: true,
      },
      orderBy: { id_karyawan: "asc" },
    });
  },

  
  async getById(id_karyawan) {
    return await prismaClient.karyawan.findUnique({
      where: { id_karyawan: Number(id_karyawan) },
      select: {
        id_karyawan: true,
        nama_karyawan: true,
        username: true,
        email: true,
        no_hp_karyawan: true,
        role: true,
      },
    });
  },


  async getByUsername(username) {
    return await prismaClient.karyawan.findUnique({
      where: { username },
    });
  },

  
  async getByEmail(email) {
    return await prismaClient.karyawan.findFirst({
      where: { email },
    });
  },

  async create({ nama_karyawan, username, email, password, no_hp_karyawan, role }) {
    return await prismaClient.karyawan.create({
      data: {
        nama_karyawan,
        username,
        email,
        password,
        no_hp_karyawan,
        role: role ?? "Resepsionis",
      },
      select: {
        id_karyawan: true,
        nama_karyawan: true,
        username: true,
        email: true,
        no_hp_karyawan: true,
        role: true,
      },
    });
  },

  
  async update(id_karyawan, { nama_karyawan, username, email, password, no_hp_karyawan, role }) {
    return await prismaClient.karyawan.update({
      where: { id_karyawan: Number(id_karyawan) },
      data: {
        ...(nama_karyawan !== undefined && { nama_karyawan }),
        ...(username !== undefined && { username }),
        ...(email !== undefined && { email }),
        ...(password !== undefined && { password }),
        ...(no_hp_karyawan !== undefined && { no_hp_karyawan }),
        ...(role !== undefined && { role }),
      },
      select: {
        id_karyawan: true,
        nama_karyawan: true,
        username: true,
        email: true,
        no_hp_karyawan: true,
        role: true,
      },
    });
  },

  
  async delete(id_karyawan) {
    return await prismaClient.karyawan.delete({
      where: { id_karyawan: Number(id_karyawan) },
    });
  },
};

export default karyawanModel;