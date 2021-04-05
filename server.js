const express = require("express");
const productRoutes = require('./routes');

const PORT = 5000;

const app = express();

app.use("/api/products", (res, res), productRoutes);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Running on Port ${PORT}`);
