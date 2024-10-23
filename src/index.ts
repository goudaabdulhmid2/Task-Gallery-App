import express from "express";
import path from "path";
import config from "./config";
import morgan from "morgan";

import indexRouter from "./routes/index.route";

const app = config.app;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.json({ limit: "10kb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);
app.use(morgan("dev"));

app.use("/", indexRouter);

config.runApp();
