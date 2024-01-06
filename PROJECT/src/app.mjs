import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true,limit:"16kb" }));    
app.use(express.static("public"));
// app.post("/home", (req, res) => { res.send("hiiiii")})

//import router
import  userRouter  from "./routes/user.routes.mjs";
app.use("/api/v1/users",userRouter)


export  {app}


