import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import userRouter from "./App/Module/User/userRoute";

app.use(cors());

// Parser;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// application tesis service
app.use("/api/v1/users", userRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send("working");
});

export default app;