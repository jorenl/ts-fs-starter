import express = require("express");
import expressWs = require("express-ws");
import path from "path";

const PORT = 3000;

const app = express();
const ws = expressWs(app);

app.use("/assets/", express.static(path.join(__dirname, '../public')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.htm'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})