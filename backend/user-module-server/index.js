const express = require("express");

const app = express();
const port = 3000;

/**
 * auth: "https://cdn.jsdelivr.net/gh/DivyatejaChe/df-repack@1629c48afc875fe2afb72e251f5d24c6b9cd6c66/packages/catalog-server/data/[name][ext]",
 * auth: "https://cdn.jsdelivr.net/gh/DivyatejaChe/df-repack@58a34d19ac7d0a9947ebcf63c56c7564c13ae210/bundles/build/generated/android/[name][ext]",
 *
 * auth: "http://localhost:9000/[name][ext]",
 */

const userModuleAccess = {
  auth: "https://cdn.jsdelivr.net/gh/DivyatejaChe/df-repack@d996b438ed10c0f5cb3242990c383f55e9ac3900/bundles/build/generated/android/[name][ext]",
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
