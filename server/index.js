const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const port = process.env.PORT || 5500;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
