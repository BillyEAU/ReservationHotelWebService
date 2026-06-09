import bcrypt from "bcrypt";
import { prismaClient } from "../src/database/dbConfig.js";

async function main() {
  const hashedPassword = await bcrypt.hash("12345678", 10);

  const user = await prismaClient.karyawan.create({
    data: {
      nama_karyawan: "Aron",
      username: "aron",
      email: "billy@gmail.com",
      password: hashedPassword,
      no_hp_karyawan: "081234567812",
      role: "Resepsionis",
    },
  });

  console.log("User berhasil dibuat:");
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });