import karyawanModel from "../models/karyawanModel.js";
import validator from "../validators/validator.js";
import { karyawanValidationSchema } from "../validators/karyawanValidator.js";

import karyawanModel from "../models/karyawanModel.js";
import validator from "../validators/validator.js";
import { karyawanValidationSchema } from "../validators/karyawanValidator.js";

const getAll = async (req, res) => {
  try {
    const karyawan = await karyawanModel.getAll();

    if (!karyawan || karyawan.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Berhasil",
      data: karyawan,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const karyawan = await karyawanModel.getById(id);

    if (!karyawan) {
      return res.status(404).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Berhasil",
      data: karyawan,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const { body } = req;

    const { error, value } = validator(
      karyawanValidationSchema,
      body
    );

    if (error) {
      return res.status(400).json({
        status: false,
        error,
      });
    }

    const newKaryawan = await karyawanModel.create(value);

    return res.status(201).json({
      status: true,
      message: "Karyawan berhasil ditambahkan",
      data: newKaryawan,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const karyawan = await karyawanModel.getById(id);

    if (!karyawan) {
      return res.status(404).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    const { error, value } = validator(
      karyawanValidationSchema,
      body
    );

    if (error) {
      return res.status(400).json({
        status: false,
        error,
      });
    }

    const updatedKaryawan = await karyawanModel.update(id, value);

    return res.status(200).json({
      status: true,
      message: "Data berhasil diupdate",
      data: updatedKaryawan,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const karyawan = await karyawanModel.getById(id);

    if (!karyawan) {
      return res.status(404).json({
        status: false,
        message: "Data tidak ditemukan",
      });
    }

    await karyawanModel.delete(id);

    return res.status(200).json({
      status: true,
      message: "Data berhasil dihapus",
      data: karyawan,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  destroy,
};