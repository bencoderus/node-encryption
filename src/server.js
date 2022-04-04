const express = require("express");
const controller = require("./controllers/main.controller");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/records", controller.index);
app.post("/records/find-by-bvn", controller.find);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
