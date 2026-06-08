import Joi from "joi";

const kamarValidationSchema = Joi.object({
  id_tipe_kamar: Joi.number().integer().positive().required().messages({
    "number.base": "ID Tipe Kamar harus berupa angka",
    "any.required": "ID Tipe Kamar wajib diisi",
  }),
  nomor_kamar: Joi.string().max(10).required().messages({
    "string.empty": "Nomor kamar tidak boleh kosong",
    "any.required": "Nomor kamar wajib diisi",
  }),
  status: Joi.string().valid('Tersedia', 'Terisi', 'Dipesan', 'Pembersihan').default('Tersedia').messages({
    "any.only": "Status kamar yang dimasukkan tidak valid",
  })
});

export { kamarValidationSchema };