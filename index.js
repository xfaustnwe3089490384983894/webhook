import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.post('/devast', (req, res) => {
  console.log('Получен webhook:', req.body);

  // Пример ответа (пустой список команд)
  res.json({
    type: "commands",
    content: []
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
