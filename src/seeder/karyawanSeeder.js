import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import { prismaClient } from "../database/dbConfig.js";

async function main() {
  const hashedPassword = await bcrypt.hash("12345678", 10);
console.log("Seeder loaded");
console.log("DATABASE_URL =", process.env.DATABASE_URL);
  const user = await prismaClient.karyawan.create({
    data: {
      nama_karyawan: "wiguna",
      username: "arya",
      email: "radit@gmail.com",
      password: hashedPassword,
      no_hp_karyawan: "081234567812",
      role: "Admin",
    },
  });

  console.log("User berhasil dibuat");
  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prismaClient.$disconnect();
  });   