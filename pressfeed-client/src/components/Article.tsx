import React from 'react';
import moment from 'moment';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'

interface Props {
  article: object,
  key: number
}

const Article: React.FC<Props> = ({article}:any, {articleKey}) => {
  const articleDate = moment(article.published_date).format('MM/DD/YYYY');

  console.log(article);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       component="img"
       height="140"
       image={article.multimedia[0].url}
       alt={article.multimedia[0].caption}
      />
    </Card>
  )
};

export default Article;