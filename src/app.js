import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from 'cors'
import { mainRoute } from "./router.js";
import { connectDB } from "./config/connection.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use("/api/v1", mainRoute);
connectDB();

app.listen(PORT, () => {
  console.log(`your app is runnig at 1 http://localhost:${PORT}`);
});
