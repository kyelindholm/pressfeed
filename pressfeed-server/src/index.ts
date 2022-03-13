import express from 'express';
const { getStories } = require('../controllers/getStories');
const NYT_API_KEY: string = require('../../config.ts').NYT_API_KEY;
const app = express();
const PORT: number = 8000;

app.get('/refreshfeed', async (req, res) => {
  const responseData = await getStories(req.query.section, NYT_API_KEY);
  res.header('Access-Control-Allow-Origin', '*').status(200).send(responseData);
});

app.listen(PORT, () => {
  console.log(`Server listening at http:/localhost:${PORT}`);
});