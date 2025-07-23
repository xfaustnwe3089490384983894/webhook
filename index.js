import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

app.post('/devast', (req, res) => {
  console.log('Получен запрос:', req.body);

  // Отвечаем, чтобы игра не «ложилась»
  res.json({ type: 'commands', content: [] });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
