const express = require("express");
const cors = require("cors");

const { router } = require("./routes/paymentRoutes");

require("dotenv").config({ path: "./config/config.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.get("/api-key", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

module.exports = {
  app,
};
