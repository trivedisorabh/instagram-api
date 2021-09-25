import express from 'express';

export const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));
