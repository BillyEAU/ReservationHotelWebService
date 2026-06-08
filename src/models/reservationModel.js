import { prismaClient } from "../database/dbConfig.js";

const reservasiModel = {
  
  async getAll() {
    return await prismaClient.reservasi.findMany({
      include: {
        tamu: true,
        kamar: { include: { tipe_kamar: true } },
        karyawan: {
          select: {
            id_karyawan: true,
            nama_karyawan: true,
            username: true,
            role: true,
          },
        },
      },
      orderBy: { tgl_reservasi: "desc" },
    });
  },

 
  async getById(id_reservasi) {
    return await prismaClient.reservasi.findUnique({
      where: { id_reservasi: Number(id_reservasi) },
      include: {
        tamu: true,
        kamar: { include: { tipe_kamar: true } },
        karyawan: {
          select: {
            id_karyawan: true,
            nama_karyawan: true,
            username: true,
            role: true,
          },
        },
      },
    });
  },

  
  async getByStatus(status) {
    return await prismaClient.reservasi.findMany({
      where: { status },
      include: {
        tamu: true,
        kamar: { include: { tipe_kamar: true } },
        karyawan: {
          select: { id_karyawan: true, nama_karyawan: true, role: true },
        },
      },
      orderBy: { tgl_reservasi: "desc" },
    });
  },

  
  async getByTamu(id_tamu) {
    return await prismaClient.reservasi.findMany({
      where: { id_tamu: Number(id_tamu) },
      include: {
        kamar: { include: { tipe_kamar: true } },
        karyawan: {
          select: { id_karyawan: true, nama_karyawan: true, role: true },
        },
      },
      orderBy: { tgl_reservasi: "desc" },
    });
  },

  
  async create({
    id_tamu,
    id_kamar,
    id_karyawan,
    tgl_reservasi,
    check_in,
    check_out,
    total_bayar,
    metode_pembayaran,
    status,
  }) {
    return await prismaClient.reservasi.create({
      data: {
        id_tamu: Number(id_tamu),
        id_kamar: Number(id_kamar),
        id_karyawan: Number(id_karyawan),
        tgl_reservasi: new Date(tgl_reservasi),
        check_in: new Date(check_in),
        check_out: new Date(check_out),
        total_bayar,
        metode_pembayaran,
        status: status ?? "Pending",
      },
      include: {
        tamu: true,
        kamar: { include: { tipe_kamar: true } },
        karyawan: {
          select: { id_karyawan: true, nama_karyawan: true, role: true },
        },
      },
    });
  },

  
  async update(
    id_reservasi,
    {
      id_tamu,
      id_kamar,
      id_karyawan,
      tgl_reservasi,
      check_in,
      check_out,
      total_bayar,
      metode_pembayaran,
      status,
    }
  ) {
    return await prismaClient.reservasi.update({
      where: { id_reservasi: Number(id_reservasi) },
      data: {
        ...(id_tamu !== undefined && { id_tamu: Number(id_tamu) }),
        ...(id_kamar !== undefined && { id_kamar: Number(id_kamar) }),
        ...(id_karyawan !== undefined && { id_karyawan: Number(id_karyawan) }),
        ...(tgl_reservasi !== undefined && { tgl_reservasi: new Date(tgl_reservasi) }),
        ...(check_in !== undefined && { check_in: new Date(check_in) }),
        ...(check_out !== undefined && { check_out: new Date(check_out) }),
        ...(total_bayar !== undefined && { total_bayar }),
        ...(metode_pembayaran !== undefined && { metode_pembayaran }),
        ...(status !== undefined && { status }),
      },
      include: {
        tamu: true,
        kamar: { include: { tipe_kamar: true } },
        karyawan: {
          select: { id_karyawan: true, nama_karyawan: true, role: true },
        },
      },
    });
  },

  // Update hanya status reservasi
  async updateStatus(id_reservasi, status) {
    return await prismaClient.reservasi.update({
      where: { id_reservasi: Number(id_reservasi) },
      data: { status },
    });
  },

  // Hapus reservasi
  async delete(id_reservasi) {
    return await prismaClient.reservasi.delete({
      where: { id_reservasi: Number(id_reservasi) },
    });
  },
};

export default reservasiModel;