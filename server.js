const express = require("express");
const mongoose = require("mongoose")
const productRoutes = require('./routes');

const PORT = 5000;

const app = express();

const dbpw = process.env.DBPASSWORD

mongoose.connect('mongodb+srv://admin:gnong1475!@cluster-tdd.5hqkn.mongodb.net/Hello?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    seUnifiedTopology: true 
}).then(() => console.log('MongoDB Connect..'))
.catch(err => console.error(err))

app.use("/api/products", productRoutes);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Running on Port ${PORT}`);
