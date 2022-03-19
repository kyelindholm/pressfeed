import express from 'express';
const { getStories } = require('../models/getStories');
const { addToDatabase, removeFromDatabase, getFavorites } = require('../models/handleDatabase');
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
  if (responseData) {
    res.status(200).send(responseData);
  } else {
    res.status(400).send();
  }
});

app.get('/favorites', async (req, res) => {
  const responseData = await getFavorites();

  const responseObject = responseData.rows.map((article: Array<any>) => {
    return (
      {
        "id": article[0],
        "title": article[1],
        "byline": article[2],
        "abstract": article[3],
        "short_url": article[4],
        "multimedia": [{"url": article[5], "caption": article[6]}],
        "publishdate": article[7]
      }
    )
  });

  res.status(200).send(responseObject);
});

app.post('/add', (req, res) => {
  addToDatabase(req.body.data);
  res.status(200).send('Success');
})

app.post('/remove', (req, res) => {
  removeFromDatabase(req.body.url);
  res.status(200).send('Success');
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});