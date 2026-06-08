import tipeModel from "../models/tipeModel.js";
import validator from "../validators/validator.js";
import { tipeKamarValidationSchema } from "../validators/tipeKamarValidator.js";

const getAll = async (req, res, next) => {
  try {
    const tipeKamar = await tipeModel.getAll();

    if (!tipeKamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: tipeKamar.map((item) => ({
        id_tipe_kamar: item.id_tipe_kamar,
        nama_tipe: item.nama_tipe,
        harga: item.harga,
        fasilitas: item.fasilitas,
      })),
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id && isNaN(id))
      return res.status(400).json({ error: "ID Tipe Kamar dibutuhkan" });

    const tipeKamar = await tipeModel.getById(id);

    if (!tipeKamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_tipe_kamar: tipeKamar.id_tipe_kamar,
        nama_tipe: tipeKamar.nama_tipe,
        harga: tipeKamar.harga,
        fasilitas: tipeKamar.fasilitas,
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
      tipeValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const newTipeKamar = await tipeModel.create(value);

    return res.status(201).json({
      status: true,
      message: "Data Berhasil Ditambahkan",
      data: {
        id_tipe_kamar: newTipeKamar.id_tipe_kamar,
        nama_tipe: newTipeKamar.nama_tipe,
        harga: newTipeKamar.harga,
        fasilitas: newTipeKamar.fasilitas,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id && isNaN(id))
      return res.status(400).json({ error: "ID Tipe Kamar dibutuhkan" });

    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const tipeKamar = await tipeModel.getById(id);

    if (!tipeKamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    const { error, value } = validator(
      tipeValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const updatedTipeKamar = await tipeModel.update(value, id);

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Diupdate",
      data: {
        id_tipe_kamar: updatedTipeKamar.id_tipe_kamar,
        nama_tipe: updatedTipeKamar.nama_tipe,
        harga: updatedTipeKamar.harga,
        fasilitas: updatedTipeKamar.fasilitas,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id && isNaN(id))
      return res.status(400).json({ error: "ID Tipe Kamar dibutuhkan" });

    const tipeKamar = await tipeModel.getById(id);

    if (!tipeKamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    await tipeModel.delete(id);

    return res.status(200).json({
      status: true,
      message: "Data Tipe Kamar Berhasil Dihapus",
      data: {
        id_tipe_kamar: tipeKamar.id_tipe_kamar,
        nama_tipe: tipeKamar.nama_tipe,
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
  destroy,
};