import pool from "../config/config.js";
import bcrypt from "bcrypt";

export const AdminRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    const Admin = await pool.query("SELECT * FROM admins WHERE username=$1", [
      username,
    ]);

    if (Admin.rows.length > 0) {
      return res.status(400).json({ msg: "User already exist" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await pool.query("INSERT INTO admins (username,password) VALUES ($1,$2)", [
      username,
      hashedPassword,
    ]);

    return res.status(400).json({ msg: "user registered successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
};

export const AdminAuthenticate = async (req, res) => {};
