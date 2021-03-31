const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to crwn-clothing api");
});
app.use("/api/payment", paymentRoutes);

const port = process.env.PORT || 5500;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port);
