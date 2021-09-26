import express from "express";
import { connect, consumeMessage, publishMessage } from "./rabbit.js";
const app = express();
const env = process.env;
const PORT = env.PORT || 8082;

connect();
consumeMessage();

app.get("/teste", async (req, res) => {
  await publishMessage({
    salesId: "asd2as6d1as6d1asd",
    products: [
      { productId: 1001, quantity: 3 },
      { productId: 1002, quantity: 1 },
      { productId: 1003, quantity: 2 },
    ],
  });
  return res.json({ message: "OK" });
});

app.get("/api/status", (req, res) => {
  return res.status(200).json({
    service: "Sales-API",
    status: "up",
    httpStatus: 200,
  });
});

app.listen(PORT, () => {
  console.info(`Server started successfully at port ${PORT}`);
});
