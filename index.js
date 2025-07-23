import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(express.json());

app.post('/devast', (req, res) => {
  console.log('Получен запрос:', req.body);

  // Отвечаем, чтобы игра не «ложилась»
  res.json({ type: 'commands', content: [] });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
