require("tsconfig-paths/register");
import express = require("express");
import expressWs = require("express-ws");
import path from "path";

import {sharedData} from "shared";

const PORT = 3000;

const app = express();
const ws = expressWs(app);

app.use("/assets/", express.static(path.join(__dirname, '../public')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.htm'));
});

app.get("/test", (req, res) => {
  res.send(JSON.stringify(sharedData, null, 2));
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})