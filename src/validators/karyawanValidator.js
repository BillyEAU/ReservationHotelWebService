import Joi from "joi";

const karyawanValidationSchema = Joi.object({
  nama_karyawan: Joi.string().max(100).required().messages({
    "string.base": "Nama karyawan harus berupa teks",
    "string.empty": "Nama karyawan tidak boleh kosong",
    "string.max": "Nama karyawan maksimal 100 karakter",
    "any.required": "Nama karyawan wajib diisi",
  }),
  username: Joi.string().max(50).required().messages({
    "string.empty": "Username tidak boleh kosong",
    "string.max": "Username maksimal 50 karakter",
    "any.required": "Username wajib diisi",
  }),
  email: Joi.string().email().max(100).required().messages({
    "string.email": "Format email tidak valid",
    "string.empty": "Email tidak boleh kosong",
    "any.required": "Email wajib diisi",
  }),
  password: Joi.string().min(6).max(255).required().messages({
    "string.min": "Password minimal 6 karakter",
    "string.empty": "Password tidak boleh kosong",
    "any.required": "Password wajib diisi",
  }),
  no_hp_karyawan: Joi.string().pattern(/^[0-9]+$/).max(15).required().messages({
    "string.pattern.base": "Nomor HP karyawan hanya boleh berisi angka",
    "string.empty": "Nomor HP karyawan tidak boleh kosong",
    "any.required": "Nomor HP karyawan wajib diisi",
  }),
  role: Joi.string().valid('Admin', 'Resepsionis').default('Resepsionis').messages({
    "any.only": "Role hanya boleh Admin atau Resepsionis",
  })
});

export { karyawanValidationSchema };