const express = require("express");

const app = express();
const port = 3000;

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
