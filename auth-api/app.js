import express from "express";

import { createInitialData } from "./scr/config/db/initialData.js";
import userRoutes from "./scr/modules/user/routes/UserRoutes.js";
import tracing from "./scr/config/tracing.js";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

app.get("/api/status", (req, res) => {
  return res.status(200).json({
    service: "Auth-API",
    status: "up",
    httpStatus: 200,
  });
});

app.use(express.json());

app.get("/api/initial-data", (req, res) => {
  createInitialData();
  return res.json({ message: "Data created." });
});

app.use(tracing);

app.use(userRoutes);
createInitialData();

app.listen(PORT, () => {
  console.info(`Server started successfully at port ${PORT}`);
});
