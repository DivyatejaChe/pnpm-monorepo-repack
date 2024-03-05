const express = require("express");

const app = express();
const port = 3000;

/**
 *
 * auth: "http://localhost:9000/[name][ext]",
 * auth: "https://cdn.jsdelivr.net/gh/DivyatejaChe/df-repack@d996b438ed10c0f5cb3242990c383f55e9ac3900/bundles/build/generated/android/[name][ext]",
 */

const userModuleAccess = {
  auth: "http://localhost:9000/[name][ext]",
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
