import config from "../../../config";
import { Iuser } from "./userInterface"
import { User } from "./userModel"
import { generateuserId } from "./userUtils";

const createUser = async (user: Iuser): Promise<Iuser | null> => {
  const id = await generateuserId();
  console.log(id);
  user.id = id;

  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new Error("Failed to create user");
  }
  return createdUser;
};

export default {
  createUser
}