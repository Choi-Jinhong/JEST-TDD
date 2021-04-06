const express = require("express");
const mongoose = require("mongoose")
const productRoutes = require('./routes');
const dotenv = require('dotenv');

const PORT = 5000;

const app = express();
dotenv.config();

const address = process.env.ADDRESS;

console.log(address);

mongoose.connect(address, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connect..'))
.catch(err => console.error(err))

app.use("/api/products", productRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
})

app.listen(PORT);
console.log(`Running on Port ${PORT}`);

module.exports = app;