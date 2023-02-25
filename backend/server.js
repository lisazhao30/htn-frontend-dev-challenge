const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');

const authRoute = require("./routes/authenticationroutes")

const app = express();
dotenv.config();

const db = process.env.MONGODB_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(cors());

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

app.use("/api", authRoute);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
