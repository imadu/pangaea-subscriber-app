import express from "express";
import morgan from "morgan";

export const app = express().use(morgan("tiny"));
