import reservationModel from "../models/reservationModel.js";
import validator from "../validators/validator.js";
import { reservasiValidationSchema } from "../validators/reservasiValidator.js";

const getAll = async (req, res, next) => {
  try {
    const reservasi = await reservationModel.getAll();

    if (!reservasi)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: reservasi.map((item) => ({
        id_reservasi: item.id_reservasi,
        id_tamu: item.id_tamu,
        id_kamar: item.id_kamar,
        id_karyawan: item.id_karyawan,
        tgl_reservasi: item.tgl_reservasi,
        check_in: item.check_in,
        check_out: item.check_out,
        total_bayar: item.total_bayar,
        metode_pembayaran: item.metode_pembayaran,
        status: item.status,
      })),
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(400).json({ error: "ID Reservasi dibutuhkan" });

    const reservasi = await reservationModel.getById(id);

    if (!reservasi)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_reservasi: reservasi.id_reservasi,
        id_tamu: reservasi.id_tamu,
        id_kamar: reservasi.id_kamar,
        id_karyawan: reservasi.id_karyawan,
        tgl_reservasi: reservasi.tgl_reservasi,
        check_in: reservasi.check_in,
        check_out: reservasi.check_out,
        total_bayar: reservasi.total_bayar,
        metode_pembayaran: reservasi.metode_pembayaran,
        status: reservasi.status,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const create = async (req, res, next) => {
  try {
    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const { error, value } = validator(
      reservasiValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const newReservasi = await reservationModel.create(value);

    return res.status(201).json({
      status: true,
      message: "Data Reservasi Berhasil Ditambahkan",
      data: {
        id_reservasi: newReservasi.id_reservasi,
        id_tamu: newReservasi.id_tamu,
        id_kamar: newReservasi.id_kamar,
        id_karyawan: newReservasi.id_karyawan,
        tgl_reservasi: newReservasi.tgl_reservasi,
        check_in: newReservasi.check_in,
        check_out: newReservasi.check_out,
        total_bayar: newReservasi.total_bayar,
        metode_pembayaran: newReservasi.metode_pembayaran,
        status: newReservasi.status,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(400).json({ error: "ID Reservasi dibutuhkan" });

    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const reservasi = await reservationModel.getById(id);

    if (!reservasi)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    const { error, value } = validator(
      reservasiValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const updatedReservasi = await reservationModel.update(id, value);

    return res.status(200).json({
      status: true,
      message: "Data Reservasi Berhasil Diupdate",
      data: {
        id_reservasi: updatedReservasi.id_reservasi,
        id_tamu: updatedReservasi.id_tamu,
        id_kamar: updatedReservasi.id_kamar,
        id_karyawan: updatedReservasi.id_karyawan,
        tgl_reservasi: updatedReservasi.tgl_reservasi,
        check_in: updatedReservasi.check_in,
        check_out: updatedReservasi.check_out,
        total_bayar: updatedReservasi.total_bayar,
        metode_pembayaran: updatedReservasi.metode_pembayaran,
        status: updatedReservasi.status,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const updateStatusReservasi = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const reservasi = await prismaClient.reservasi.update({
      where: {
        id: Number(id)
      },
      data: {
        status
      }
    });

    res.status(200).json({
      success: true,
      data: reservasi
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(400).json({ error: "ID Reservasi dibutuhkan" });

    const reservasi = await reservationModel.getById(id);

    if (!reservasi)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    await reservationModel.delete(id);

    return res.status(200).json({
      status: true,
      message: "Data Reservasi Berhasil Dihapus",
      data: {
        id_reservasi: reservasi.id_reservasi,
        id_tamu: reservasi.id_tamu,
        id_kamar: reservasi.id_kamar,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  updateStatusReservasi,
  destroy,
};