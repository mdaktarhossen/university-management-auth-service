import { Model, Schema, model } from "mongoose";
import { Iuser } from "./userInterface";

type userModel = Model<Iuser, object>

const userSchema = new Schema<Iuser>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  roll: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: 0

  },
}, { timestamps: true });

export const User = model<Iuser, userModel>("user", userSchema);