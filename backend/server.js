import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configure/db.js";
import projectRoute from "./routes/projectRoute.js";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/projects", projectRoute);
app.use("/api/contact", contactRoute);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
