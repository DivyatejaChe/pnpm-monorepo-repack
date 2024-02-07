const express = require("express");

const app = express();
const port = 3000;

const userModuleAccess = {
  auth: "https://cdn.jsdelivr.net/gh/DivyatejaChe/df-repack@1629c48afc875fe2afb72e251f5d24c6b9cd6c66/auth.container.bundle.js",
  transactions: "http://localhost:9001/[name][ext]",
  help: "http://localhost:9002/[name][ext]",
};

app.get("/host", (req, res) => {
  res.send({ userModuleAccess });
});

app.listen(port, () => {
  console.log(`User-Module-Server listening at port ${port} `);
});

module.exports = app;
