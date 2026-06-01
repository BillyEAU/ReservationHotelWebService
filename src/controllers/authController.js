import { PrismaClient } from "../database/dbConfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const authController = {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await prismaClient.findUnique({
            where: { username: username },
        });
        if (!user) return res.status(404).json({ error: "Username Karyawan tidak ditemukan" });
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) return res.status(401).json({ error: "Password Salah" });
        const token = jwt.sign(
            { id: Number(user.id), email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1d" },
        );
        res.json({
            status: true,
            message: "Login Berhasil",
            data: {
                id: Number(user.id),
                email: user.email,
                name: user.name,
                token: token,
            },
        });
    },
};
export default authController;