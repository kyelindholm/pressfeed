const addToDatabase = (article: any) => {
  const articleObject = {
    title: article.title,
    byline: article.byline,
    abstract: article.abstract,
    shorturl: article.short_url,
    imgurl: article.multimedia[0].url,
    caption: article.multimedia[0].caption,
    publishdate: article.published_date
  };

  console.log(articleObject);
}

const removeFromDatabase = (url: string) => {
  console.log(url);
}

module.exports = { addToDatabase, removeFromDatabase }