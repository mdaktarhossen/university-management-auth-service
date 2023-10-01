import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`bd connection`);
    app.listen(config.port, () => {
      console.log(`server is running Port: ${config.port}`);
    });
  } catch (err) {
    console.log(`gotted a err`, err);
  }
}
main();