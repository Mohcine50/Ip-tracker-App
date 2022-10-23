import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;
const API_ENDPOINT = process.env.API_ENDPOINT;

const API_KEY = process.env.API_KEY;

app.get("/ip/:ipAdress", async (req, res) => {
  const ipAdress = req.params.ipAdress;
  const response = await fetch(
    `${API_ENDPOINT}=${API_KEY}&ipAddress=${ipAdress}`
  );

  const data = await response.json();

  res.json(data);

  console.log(ipAdress);
});

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
