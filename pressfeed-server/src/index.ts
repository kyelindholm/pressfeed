import express from 'express';
const { getStories } = require('../controllers/getStories');
const {NYT_API_KEY} = require('../../config.ts');
const app = express();
const PORT: number = 8000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/refreshfeed', async (req, res) => {
  const responseData = await getStories(req.query.section, NYT_API_KEY);
  res.status(200).send(responseData);
});

app.post('/add', (req, res) => {
  console.log("add", req.body);
  res.status(200).send('Success');
})

app.post('/remove', (req, res) => {
  console.log("remove", req.body);
  res.status(200).send('Success');
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});