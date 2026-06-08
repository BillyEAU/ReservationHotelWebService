import kamarModel from "../models/kamarModel.js";
import validator from "../validators/validator.js";
import { kamarValidationSchema } from "../validators/kamarValidator.js";

const getAll = async (req, res, next) => {
  try {
    const kamar = await kamarModel.getAll();

    if (!kamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: kamar.map((item) => ({
        id_kamar: item.id_kamar,
        id_tipe_kamar: item.id_tipe_kamar,
        nomor_kamar: item.nomor_kamar,
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
      return res.status(400).json({ error: "ID Kamar dibutuhkan" });

    const kamar = await kamarModel.getById(id);

    if (!kamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Ditemukan",
      data: {
        id_kamar: kamar.id_kamar,
        id_tipe_kamar: kamar.id_tipe_kamar,
        nomor_kamar: kamar.nomor_kamar,
        status: kamar.status,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getByKamarStatus = async (req, res, next) => {
        try {
            const { status } = req.params;

            const kamar = await prismaClient.kamar.findMany({
                where: {
                    status: status
                }
            });

            res.status(200).json({
                success: true,
                data: kamar
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
};

const create = async (req, res, next) => {
  try {
    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const { error, value } = validator(
      kamarValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const newKamar = await kamarModel.create(value);

    return res.status(201).json({
      status: true,
      message: "Data Berhasil Ditambahkan",
      data: {
        id_kamar: newKamar.id_kamar,
        id_tipe_kamar: newKamar.id_tipe_kamar,
        nomor_kamar: newKamar.nomor_kamar,
        status: newKamar.status,
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
      return res.status(400).json({ error: "ID Kamar dibutuhkan" });

    const { body } = req;

    if (!body)
      return res.status(400).json({ error: "Data tidak lengkap" });

    const kamar = await kamarModel.getById(id);

    if (!kamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    const { error, value } = validator(
      kamarValidationSchema,
      body
    );

    if (error)
      return res.status(400).json({ error: error });

    const updatedKamar = await kamarModel.update(value, id);

    return res.status(200).json({
      status: true,
      message: "Data Berhasil Diupdate",
      data: {
        id_kamar: updatedKamar.id_kamar,
        id_tipe_kamar: updatedKamar.id_tipe_kamar,
        nomor_kamar: updatedKamar.nomor_kamar,
        status: updatedKamar.status,
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
      return res.status(400).json({ error: "ID Kamar dibutuhkan" });

    const kamar = await kamarModel.getById(id);

    if (!kamar)
      return res.status(404).json({ error: "Data tidak ditemukan" });

    await kamarModel.delete(id);

    return res.status(200).json({
      status: true,
      message: "Data Kamar Berhasil Dihapus",
      data: {
        id_kamar: kamar.id_kamar,
        nomor_kamar: kamar.nomor_kamar,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default {
  getAll,
  getById,
  getByKamarStatus,
  create,
  update,
  destroy,
};