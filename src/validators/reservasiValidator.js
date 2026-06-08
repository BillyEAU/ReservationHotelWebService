import Joi from "joi";

const reservasiValidationSchema = Joi.object({
  id_tamu: Joi.number().integer().positive().required().messages({
    "number.base": "ID Tamu harus berupa angka",
    "any.required": "ID Tamu wajib diisi",
  }),
  id_kamar: Joi.number().integer().positive().required().messages({
    "number.base": "ID Kamar harus berupa angka",
    "any.required": "ID Kamar wajib diisi",
  }),
  id_karyawan: Joi.number().integer().positive().required().messages({
    "number.base": "ID Karyawan harus berupa angka",
    "any.required": "ID Karyawan wajib diisi",
  }),
  tgl_reservasi: Joi.date().iso().required().messages({
    "date.format": "Format tanggal reservasi harus ISO",
    "any.required": "Tanggal reservasi wajib diisi",
  }),
  check_in: Joi.date().iso().required().messages({
    "date.format": "Format tanggal check-in harus ISO",
    "any.required": "Tanggal check-in wajib diisi",
  }),
  check_out: Joi.date().iso().min(Joi.ref('check_in')).required().messages({
    "date.min": "Tanggal check-out tidak boleh sebelum tanggal check-in",
    "any.required": "Tanggal check-out wajib diisi",
  }),
  total_bayar: Joi.number().positive().precision(2).required().messages({
    "number.base": "Total bayar harus berupa angka",
    "number.positive": "Total bayar tidak boleh bernilai negatif",
    "any.required": "Total bayar wajib diisi",
  }),
  metode_pembayaran: Joi.string().valid('Cash', 'Transfer', 'Debit', 'Kredit').required().messages({
    "any.only": "Metode pembayaran harus salah satu dari: Cash, Transfer, Debit, Kredit",
    "any.required": "Metode pembayaran wajib diisi",
  }),
  status: Joi.string().valid('Pending', 'Dikonfirmasi', 'Check-In', 'Check-Out', 'Dibatalkan').default('Pending').messages({
    "any.only": "Status reservasi yang dimasukkan tidak valid",
  })
});

export { reservasiValidationSchema };