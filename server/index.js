const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = 3000;
const app = express();
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const AI_API_KEY = process.env.AI_API_KEY;
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
// app.post("/ai/advise", async (req, res) => {
//   const { user } = req.body;
//   const userSummary = `Name: ${user.userName}Income:${user.income
//     .map((i) => `- ${i.cato}: $${i.amount}`)
//     .join("\n")}Expenses:${user.expenses
//     .map((e) => `- ${e.cato}: $${e.amount}`)
//     .join("\n")}Advise:${user.advise.map(
//     (e) => `-${e.topic}:${e.description}(impact elvel:${e.impact})`
//   )}`;
//   const finalMessages = [
//     {
//       role: "system",
//       content: `You are a financial assistant. The user's profile is:\n${userSummary}
//     Conversation:
//     ${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}
//     impact level 1:low impact
//     impact level2: medium impact
//     impact level3:high impact
//     return me a form if the users need a new advise:
//     topic:
//     description:
//     impact level:
//     `,
//     },
//     ...messages,
//   ];
//   try {
//     const result = await axios.post(
//       "https://api.together.xyz/v1/chat/completions",
//       {
//         model: "mistralai/Mistral-7B-Instruct-v0.2", // 或 llama3 模型
//         messages: finalMessages,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${AI_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json({ reply: result.data.choices[0].message.content });
//   } catch (error) {
//     console.error("❌ 后端出错:", error.message);
//     res.status(500).json({ error: "调用 Together API 出错" });
//   }
// });
app.post("/ai/score", async (req, res) => {
  const { user } = req.body;

  if (!user || !Array.isArray(user.income) || !Array.isArray(user.expenses)) {
    return res.status(400).json({ error: "Invalid user data" });
  }

  const incomeSum = user.income.reduce(
    (sum, i) => sum + Number(i.amount || 0),
    0
  );
  const expenseSum = user.expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  const userSummary = `Name: ${user.userName}
Total Monthly Income: $${incomeSum}
Total Monthly Expenses: $${expenseSum}
Income Breakdown:
${user.income.map((i) => `- ${i.cato}: $${i.amount}`).join("\n")}
Expense Breakdown:
${user.expenses.map((e) => `- ${e.cato}: $${e.amount}`).join("\n")}`;

  const prompt = [
    {
      role: "system",
      content:
        "You are a You are a financial advisor. Based on a user's income and expenses, return a financial health score (0–100,Poor:0-50;Fair:51-70;Good:71-90;Excellent91-100), and a short explanation. Score closer to 100 means better financial health. advisor. Based on a user's income and expenses, return a financial health score (0–100), and a short explanation. Score closer to 100 means better financial health.",
    },
    {
      role: "user",
      content: `Analyze the following financial data and return a JSON like this: 
{
  "score": number,
  "comment": string
}

User Financial Data:
${userSummary}`,
    },
  ];

  try {
    const result = await axios.post(
      "https://api.together.xyz/v1/chat/completions",
      {
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: prompt,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const text = result.data.choices[0].message.content.trim();

    // Try to extract JSON (parse if wrapped in explanation)
    const jsonMatch = text.match(/\{[\s\S]*?\}/);
    if (!jsonMatch) throw new Error("Invalid AI response");

    const parsed = JSON.parse(jsonMatch[0]);
    res.json(parsed);
  } catch (error) {
    console.error(
      "❌ AI Score API Error:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "AI 分析失败，请检查日志" });
  }
});
app.post("/ai/chat", async (req, res) => {
  const { messages, user } = req.body;
  const userSummary = `Name: ${user.userName}Income:${user.income
    .map((i) => `- ${i.cato}: $${i.amount}`)
    .join("\n")}Expenses:${user.expenses
    .map((e) => `- ${e.cato}: $${e.amount}`)
    .join("\n")}`;
  const prompt = `
    The following is a conversation with the user. The user profile is:${userSummary}

    Conversation:
    ${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}

    Assistant:
  `;
  const finalMessages = [
    {
      role: "system",
      content: `You are a financial assistant. The user's profile is:\n${userSummary} 
    Conversation:
    ${messages.map((m) => `${m.role}: ${m.content}`).join("\n")} `,
    },
    ...messages, // append user/assistant historical messages
  ];
  try {
    const result = await axios.post(
      "https://api.together.xyz/v1/chat/completions",
      {
        model: "mistralai/Mistral-7B-Instruct-v0.2", // 或 llama3 模型
        messages: finalMessages,
      },
      {
        headers: {
          Authorization: `Bearer ${AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ reply: result.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ 后端出错:", error.message);
    res.status(500).json({ error: "调用 Together API 出错" });
  }
});

app.listen(port, () => {
  console.log(API_KEY);
  console.log(`Example app listening at http://localhost:${port}`);
});
