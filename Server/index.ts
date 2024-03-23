import dotenv from 'dotenv'
import express, { Express } from "express";
import connectMongo from "./config/db";

const app: Express = express();

dotenv.config();
connectMongo(String(process.env.mongoLink));

interface configarations {
  port: number;
  host: string;
}

const config:configarations = {
  port: Number(process.env.PORT) || 3000,
  host: "192.168.0.1",
};

app.listen(config.port, config.host, () => {
  console.log(`Server running on http://${config.host}:${config.port}`);
});
