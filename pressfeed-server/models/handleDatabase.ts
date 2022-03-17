import client from '../../database';

const addToDatabase = (article: any) => {
  client.query(`INSERT INTO favorites (title, byline, abstract, shorturl, imgurl, caption, publishdate) VALUES ('${article.title}', '${article.byline}', '${article.abstract}', '${article.short_url}', '${article.multimedia[0].url}', '${article.multimedia[0].caption}', '${article.published_date}')`)
    .then(() => {
      console.log('Article added to favorites!')
    })
    .catch((err: Error) => { console.error(err); });
}

const removeFromDatabase = (url: string) => {
  client.query(`DELETE FROM favorites WHERE shorturl='${url}'`)
    .then(() => {
      console.log('Article deleted from favorites!');
    })
    .catch((err: Error) => { console.error(err); });
}

module.exports = { addToDatabase, removeFromDatabase }