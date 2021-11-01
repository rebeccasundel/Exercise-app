const app = require("./app");

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');

const weatherRouter = require('./routes/weather');


app.use('/exercises', exercisesRouter);

app.use('/weather', weatherRouter);



app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
