import Joi from "joi";

const tamuValidationSchema = Joi.object({
  nama: Joi.string().max(100).required().messages({
    "string.base": "Nama tamu harus berupa teks",
    "string.empty": "Nama tamu tidak boleh kosong",
    "string.max": "Nama tamu maksimal 100 karakter",
    "any.required": "Nama tamu wajib diisi",
  }),
  no_hp: Joi.string().pattern(/^[0-9]+$/).max(15).required().messages({
    "string.pattern.base": "Nomor HP tamu hanya boleh berisi angka",
    "string.empty": "Nomor HP tamu tidak boleh kosong",
    "any.required": "Nomor HP tamu wajib diisi",
  }),
  alamat: Joi.string().max(100).required().messages({
    "string.empty": "Alamat tamu tidak boleh kosong",
    "any.required": "Alamat tamu wajib diisi",
  })
});

export { tamuValidationSchema };