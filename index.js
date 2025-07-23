import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("📥 GET /");
  res.status(200).send("OK");
});

app.post("/devast", (req, res) => {
  const body = req.body;
  console.log("📥 Новый запрос на /devast:", JSON.stringify(body, null, 2));

  // Пример простого ответа:
  res.json({
    type: "commands",
    content: ["!pong"]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
