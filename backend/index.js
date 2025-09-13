const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(
    `🚀 \x1b[32mServer is up and running!\x1b[0m 🌍 Listening on port: \x1b[36m${port}\x1b[0m`,
  );
});
