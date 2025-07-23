import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/devast', (req, res) => {
  console.log('📥 Новый POST запрос на /devast:', req.body);
  res.json({ type: "commands", content: [] });
});

app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер слушает порт ${PORT}`);
});
