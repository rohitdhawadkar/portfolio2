import express from "express";
import dotenv from "dotenv";
import AdminRoute from "./routes/AdminRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/admin",AdminRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
