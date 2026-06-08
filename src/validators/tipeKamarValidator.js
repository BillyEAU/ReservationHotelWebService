import Joi from "joi";

const tipeKamarValidationSchema = Joi.object({
  nama_tipe: Joi.string().max(50).required().messages({
    "string.empty": "Nama tipe kamar tidak boleh kosong",
    "string.max": "Nama tipe kamar maksimal 50 karakter",
    "any.required": "Nama tipe kamar wajib diisi",
  }),
  harga: Joi.number().positive().precision(2).required().messages({
    "number.base": "Harga harus berupa angka",
    "number.positive": "Harga tidak boleh bernilai negatif",
    "any.required": "Harga wajib diisi",
  }),
  fasilitas: Joi.string().required().messages({
    "string.empty": "Fasilitas tidak boleh kosong",
    "any.required": "Fasilitas wajib diisi",
  })
});

export { tipeKamarValidationSchema };