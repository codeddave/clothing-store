const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const paymentRoutes = require("./routes/paymentRoutes");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const port = process.env.PORT || 5500;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/payment", paymentRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen((port, error) => {
  if (error) throw error;

  console.log("server running on port" + port);
});
