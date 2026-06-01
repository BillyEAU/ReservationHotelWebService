// import pkg from '@prisma/client';
// const { PrismaClient } = pkg;
import { PrismaClient } from "../../prisma/generated/client/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Ambil koneksi string dari env
const connectionString = `${process.env.DATABASE_URL}`;
if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}
const adapter = new PrismaMariaDb(connectionString);

export const prismaClient = new PrismaClient({
  adapter: adapter,
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prismaClient.$on("error", (e) => {
  console.error(e);
});

prismaClient.$on("warn", (e) => {
  console.warn(e);
});

prismaClient.$on("info", (e) => {
  console.info(e);
});

prismaClient.$on("query", (e) => {
  console.info(e);
});
