import express, { Application } from 'express';
import cors from 'cors';
import "dotenv/config"
// mongoose buildings functionality
import mongoose from 'mongoose';
const app: Application = express();
// ---------Imporded files is down;

// Using cors;
app.use(cors())
// pars data;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// conntect with mongoose;
const { URI } = process.env;
const DbConnect = async (): Promise<void> => {
  if (!URI) {
    throw new Error("Cannot connect to Mongoose");
  }
  await mongoose.connect(URI);
  app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT`);
  })
};

DbConnect();