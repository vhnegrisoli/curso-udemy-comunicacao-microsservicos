import express from "express";

import { createInitialData } from "./scr/config/db/initialData.js";
import userRoutes from "./scr/modules/user/routes/UserRoutes.js";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

createInitialData();

app.get("/api/status", (req, res) => {
  return res.status(200).json({
    service: "Auth-API",
    status: "up",
    httpStatus: 200,
  });
});

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
  console.info(`Server started successfully at port ${PORT}`);
});
