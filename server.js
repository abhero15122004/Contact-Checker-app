const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv = require("dotenv").config();
const connectDb = require('./config/dbConnection');

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server running on port ${port}')
});