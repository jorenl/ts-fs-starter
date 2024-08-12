import "tsconfig-paths/register";
import express from "express";
import expressWs from "express-ws";
import path from "path";

import { sharedData } from "shared/index";

const PORT = 3000;

const app = express();
const ws = expressWs(app);

app.use("/assets/", express.static(path.join(__dirname, "../public")));
app.use("/modules/", express.static(path.join(__dirname, "../node_modules")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.htm"));
});

app.get("/test", (req, res) => {
  res.send(JSON.stringify(sharedData, null, 2));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
