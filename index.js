const express = require("express");
const cors = require("cors");
const app = express();
const parser = require("body-parser");

app.use(cors());

app.use(parser.json());
app.use(require("./routes/index"));

app.listen(3000, () => console.log("listening on port 3000"));