const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = 3000;
const app = express();
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
app.use(bodyParser.json());
app.use(cors());

let stockList = ["TSLA", "AAPL"];

async function fetchStock(symbol) {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
  const res = await axios.get(url);
  console.log(`📊 Fetched ${symbol}:`, res.data);
  return res.data["Global Quote"];
}

app.get("/api/stocks", async (req, res) => {
  try {
    const results = [];
    for (let i = 0; i < stockList.length; i++) {
      const stock = await fetchStock(stockList[i]);
      if (stock && stock["01. symbol"]) results.push(stock);
      await new Promise((r) => setTimeout(r, 12000)); // 12s delay to avoid API rate limit
    }
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Error fetching stock data" });
  }
});

app.listen(port, () => {
  console.log(API_KEY);
  console.log(`Example app listening at http://localhost:${port}`);
});
