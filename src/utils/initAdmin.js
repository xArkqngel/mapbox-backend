import bcrypt from "bcrypt";
import { User } from "../models/User.js";

export const createDefaultAdmin = async () => {
  const existingAdmin = await User.findOne({ where: { role: "admin" } });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await User.create({
      username: "admin",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin user created successfully!");
  }
};
