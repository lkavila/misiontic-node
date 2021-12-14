const express = require("express");
const cors = require("cors");
const config = require("../config");
const api = require("../api")

const { host, port } = config.http;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", api)
app.get("/prueba", (req, res) => {
  res.json(req.body);
})

const init = () => {
  app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
  })
}

module.exports = { init }