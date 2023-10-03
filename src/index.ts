import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app: Application = express();
import config from './config/config';
// ---------Imporded files is down;


// Using cors;
app.use(cors())

// pars data;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// conntect with mongoose;
const DbConnect = async (): Promise<void> => {
  if (!config.databaeUrl) {
    throw new Error("Cannot connect to Mongoose");
  }
  await mongoose.connect(config.databaeUrl);
  app.listen(config.port, () => {
    console.log(`server listening on ${config.port}`);
  })
};

DbConnect();