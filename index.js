import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`📥 Новый запрос: { method: '${req.method}', path: '${req.path}', body:`, req.body, "}");
  next();
});

app.post("/devast", (req, res) => {
  const { player, command } = req.body || {};
  console.log("🎮 Хук от игрока:", player?.gid, "Команда:", command);

  // Отвечаем командой !pong, чтобы игра понимала, что сервер работает
  res.json({
    type: "commands",
    content: ["!pong"]
  });
});

app.get("/", (req, res) => {
  res.send("✅ Webhook сервер работает!");
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
