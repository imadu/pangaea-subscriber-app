import axios from "axios";
import { Request, Response } from "express";
import { Subscription } from "../../../data/subscriptions/subscriptions.model";
import { isValidSubscription } from "./publisher.validation";

export const subscribe = async (req: Request, res: Response) => {
  try {
    const { topic } = req.params;
    const body = req.body;
    const validation = await isValidSubscription.validateAsync(body);
    if (!validation) {
      throw new Error(`Invalid body, expected JSON`);
    }
    await Subscription.updateOne(
      { topic },
      {
        topic: topic,
        $addToSet: { subscribers: body.url },
      },
      { upsert: true, strict: true }
    );
    res.status(200).send({
      url: body.url,
      topic,
    });
  } catch (error) {
    res
      .status(500)
      .json({ err: "there was an error subscribing to this topic " + error });
  }
};

export const publish = async (req: Request, res: Response) => {
  try {
    const { topic } = req.params;
    const body = req.body;
    const published = {};
    const unpublished = {};

    const subscription = await Subscription.findOne({ topic }).select(
      "+subscribers -_id"
    );

    if (!subscription) {
      return res.status(200).json({
        msg: "There are no subscibers to this topic",
        published,
        unpublished,
      });
    }

    await Promise.all(
      subscription.subscribers.map(async (url) => {
        try {
          const _ = await axios.post(url, body);
          published[url] = `Published to ${url} successfully`;
          console.log(`Published to ${url} successfully`);
        } catch (__1) {
          console.error(`Error publishing to ${url}`);
          unpublished[url] = `Error publishing to ${url}`;
        }
      })
    );

    res.status(200).json({
      published,
      unpublished,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong " + err });
  }
};
