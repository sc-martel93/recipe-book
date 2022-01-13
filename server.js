const express = require("express");

const app = express();
const PORT = process.env.port || 3001;

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
