import { Model, Schema, model } from "mongoose";
import { Iuser } from "./userInterface";

type userModel = Model<Iuser, object>

const userSchema = new Schema<Iuser>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  roll: {
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true });

export const User = model<Iuser, userModel>("userModel", userSchema);