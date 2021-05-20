import express from "express";
import morgan from "morgan";
import { router } from "./server/controllers";

export const app = express().use(morgan("tiny")).use("/", router);
