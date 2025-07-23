const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000; // Railway сам назначает порт

app.use(bodyParser.json());

// Обработчик POST /devast
app.post('/devast', (req, res) => {
  console.log('Получен запрос от Devast.io:', req.body);

  // Пример ответа (можно менять)
  const response = {
    type: "commands",
    content: [
      "!message-to=1:Привет с Railway!",
      "!add-data=1:[test]:Hello_World" // Пример добавления данных игроку
    ]
  };

  res.json(response);
});

// Проверка работоспособности (корневой маршрут)
app.get('/', (req, res) => {
  res.send('Devast.io Webhook Server is running!');
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
