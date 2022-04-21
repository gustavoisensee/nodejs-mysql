import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/status', (req, res) => {
  res.status(200).send('ok');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
