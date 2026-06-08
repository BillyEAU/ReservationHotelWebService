import karyawanModel from "../models/karyawanModel.js";
import validator from "../validators/validator.js";
import { karyawanValidationSchema } from "../validators/karyawanValidator.js";

const getAll = async (req, res, next) => {
  try {
    const karyawan = await karyawanModel.getAll();

    if (!karyawan)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: karyawan.map((item) => ({
        id_karyawan: Number(item.id_karyawan),
        nama_karyawan: item.nama_karyawan,
        username: item.username,
        email: item.email,
        no_hp_karyawan: item.no_hp_karyawan,
        role: item.role,
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
      return res.status(400).json({ error: "ID Karyawan dibutuhkan" });

    const karyawan = await karyawanModel.getById(id);

    if (!karyawan)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_karyawan: karyawan.id_karyawan,
        nama_karyawan: karyawan.nama_karyawan,
        username: karyawan.username,
        email: karyawan.email,
        no_hp_karyawan: karyawan.no_hp_karyawan,
        role: karyawan.role,
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
      karyawanValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const newKaryawan = await karyawanModel.create(value);

    return res.status(201).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_karyawan: newKaryawan.id_karyawan,
        nama_karyawan: newKaryawan.nama_karyawan,
        username: newKaryawan.username,
        email: newKaryawan.email,
        no_hp_karyawan: newKaryawan.no_hp_karyawan,
        role: newKaryawan.role,
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
      return res.status(400).json({ error: "ID Karyawan dibutuhkan" });

    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const karyawan = await karyawanModel.getById(id);

    if (!karyawan)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    const { error, value } = validator(
      karyawanValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const updatedKaryawan = await karyawanModel.update(value, id);

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_karyawan: updatedKaryawan.id_karyawan,
        nama_karyawan: updatedKaryawan.nama_karyawan,
        username: updatedKaryawan.username,
        email: updatedKaryawan.email,
        no_hp_karyawan: updatedKaryawan.no_hp_karyawan,
        role: updatedKaryawan.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(400).json({ error: "ID Karyawan dibutuhkan" });

    const karyawan = await karyawanModel.getById(id);

    if (!karyawan)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    await karyawanModel.delete(id);

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Dihapus",
      data: {
        id_karyawan: karyawan.id_karyawan,
        nama_karyawan: karyawan.nama_karyawan,
        username: karyawan.username,
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