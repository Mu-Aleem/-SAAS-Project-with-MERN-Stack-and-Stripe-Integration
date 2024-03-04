import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

//routes import
import userRouter from "./routes/user.routes.js";
// import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("welcome!");
});

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//routes declaration
app.use("/api/v1/user", userRouter);

export { app };
