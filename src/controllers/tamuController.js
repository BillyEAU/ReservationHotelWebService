import tamuModel from "../models/tamuModel.js";
import validator from "../validators/validator.js";
import { tamuValidationSchema } from "../validators/tamuValidator.js";

const getAll = async (req, res, next) => {
  try {
    const tamu = await tamuModel.getAll();

    if (!tamu)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: tamu.map((item) => ({
        id_tamu: item.id_tamu,
        nama: item.nama,
        no_hp: item.no_hp,
        alamat: item.alamat,
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
      return res.status(400).json({ error: "ID Tamu dibutuhkan" });

    const tamu = await tamuModel.getById(id);

    if (!tamu)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_tamu: tamu.id_tamu,
        nama: tamu.nama,
        no_hp: tamu.no_hp,
        alamat: tamu.alamat,
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
      tamuValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const newTamu = await tamuModel.create(value);

    return res.status(201).json({
      status: true,
      message: "Data Berhasil Ditambahkan",
      data: {
        id_tamu: newTamu.id_tamu,
        nama: newTamu.nama,
        no_hp: newTamu.no_hp,
        alamat: newTamu.alamat,
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
      return res.status(400).json({ error: "ID Tamu dibutuhkan" });

    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const tamu = await tamuModel.getById(id);

    if (!tamu)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    const { error, value } = validator(
      tamuValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const updatedTamu = await tamuModel.update(value, id);

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Diupdate",
      data: {
        id_tamu: updatedTamu.id_tamu,
        nama: updatedTamu.nama,
        no_hp: updatedTamu.no_hp,
        alamat: updatedTamu.alamat,
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
      return res.status(400).json({ error: "ID Tamu dibutuhkan" });

    const tamu = await tamuModel.getById(id);

    if (!tamu)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    await tamuModel.delete(id);

    return res.status(200).json({
      status: true,
      message: "Data Tamu Berhasil Dihapus",
      data: {
        id_tamu: tamu.id_tamu,
        nama: tamu.nama,
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