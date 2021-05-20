import express from 'express';
import morgan from "morgan";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8000;

const router = express
  .Router({
    strict: true
  })
  .get('/', (req, res) => {
    res.send("Everything OK!");
  })

express()
  .use(morgan('tiny'))
  .use("/", router)
  .listen(PORT, () => console.log(`Subscriber listening on ${PORT}`))