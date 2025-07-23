import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.post("/devast", (req, res) => {
  const { player, command } = req.body;

  if (!player || !command) {
    return res.status(400).json({ error: "Invalid request format" });
  }

  console.log(`📥 Команда от игрока ${player.gid}: ${command}`);

  if (command.startsWith("!start-webhook")) {
    // Отправляем в чат инструкцию
    const message = `Webhooks
The game can now PUSH its state to your server every 2 seconds and accept commands in return.
You must first enable the webhook.
To start listening on port 8000, type:
!start-webhook=<YOUR_SERVER_IP>
The game will POST JSON to /devast every 1 seconds. You must respond at least once with:
  { "type": "commands", "content": [ "command1", "command2", … ] }
          
  { "type": "filter", "content": { "players": [ { "gid": 1 } ] } }
          
  { "type": "filter", "content": 0 }
          
To stop webhook callbacks, type:
!stop-webhook
Players can now set a chat login (won’t appear in-game), stored as player.login:
login=<any_string>
To attach custom data to a player’s memory buffer:
!add-data=PLAYER_ID:[LOGIN]:ANY_STRING
To send an item to a specific player:
!item-to=PLAYER_ID:[LOGIN]:ITEM*QUANTITY
To remove a given amount of item to a specific player:
!remove-to=PLAYER_ID:[LOGIN]:ITEM*QUANTITY
To send a message to a specific player:
!message-to=PLAYER_ID:[LOGIN]:MESSAGE
If you include a LOGIN, the command only applies when the incoming webhook’s player.login matches.`;

    return res.json({
      type: "commands",
      content: [`!message-to=${player.gid}:${message}`],
    });
  }

  if (command === "!stop-webhook") {
    // Останавливаем webhook — просто не шлём команды
    return res.json({ type: "commands", content: [] });
  }

  // Для любых других команд — просто подтверждаем
  return res.json({
    type: "commands",
    content: ["!pong"],
  });
});

app.get("/", (req, res) => {
  res.send("Webhook server is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
