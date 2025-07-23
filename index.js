import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/devast", (req, res) => {
  const { player, command } = req.body;
  if (!player || !command) {
    return res.status(400).send("Invalid format");
  }

  console.log(`📥 Команда от ${player.gid}: ${command}`);
  return res.json({ type: "commands", content: ["!pong"] });
});

app.get("/", (req, res) => {
  res.send("🚀 Сервер Devast работает!");
});

app.listen(PORT, () => {
  console.log(`✅ Сервер слушает порт ${PORT}`);
});
