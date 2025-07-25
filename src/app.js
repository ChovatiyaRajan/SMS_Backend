import express from "express";
import { mainRoute } from "./router.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1" , mainRoute)

app.listen(PORT, () => {
  console.log(`your app is runnig at 1 http://localhost:${PORT}`);
});
