require("dotenv").config();

//ดูว่าToken หรือ Secret เข้ารึป่าว
// console.log("TOKEN:", process.env.CHANNEL_ACCESS_TOKEN);
// console.log("SECRET:", process.env.CHANNEL_SECRET);

const express = require("express");
const { Client, middleware } = require("@line/bot-sdk");
const flexContent = require("./Result_Total_M-Plan");
const { createStyledLcFlex } = require("./Request_Support");

//ดึง Token และ Secret มาจาก .env
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const app = express();
const client = new Client(config);

// app.use(express.json());

app.post("/webhook", middleware(config), (req, res) => {
  console.log("📩 Webhook hit:", JSON.stringify(req.body));
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("Error in webhook:", err);
      res.status(500).end();
    });
});

app.get("/", (req, res) => {
  console.log("✅ GET ");
  res.send("LINE Bot is running ✅");
});

function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  //ดู Result
  if (event.message.text.trim().toLowerCase() === "result") {
    return client.replyMessage(event.replyToken, {
      type: "flex",
      altText: "Result",
      contents: flexContent,
    });
  }

  //Request_Support
  if (event.message.text.trim().toLowerCase().startsWith("no ")) {
    const mcNumber = event.message.text.split(" ")[1];
    const flex = createStyledLcFlex(mcNumber);

    return client.replyMessage(event.replyToken, {
      type: "flex",
      altText: `ขอความช่วยเหลือ MC No. ${mcNumber}`,
      contents: flex,
    });
  }

  //Testว่าBOTตัวนี้ทำงานได้
  //   return client.replyMessage(event.replyToken, {
  //     type: "text",
  //     text: `คุณพิมพ์ว่า: ${event.message.text}`,
  //   });
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
