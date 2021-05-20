import express from "express";
import { publish, subscribe } from "./publisher/publisher.controller";

export const router = express
  .Router({
    strict: true,
  })
  .get("/", (req, res) => {
    res.send("Everything ok!");
  })
  .post("/subscribe/:tpoic", subscribe)
  .post("/publish/:topic", publish);
