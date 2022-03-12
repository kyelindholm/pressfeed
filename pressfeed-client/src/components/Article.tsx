import React from 'react';
import moment from 'moment';
import { ArticleProps } from '../../types';
import { Card, CardMedia, CardContent, Typography, Grid, Link } from '@mui/material'

import useStyles from '../styles/styles';


const Article: React.FC<ArticleProps> = ({article}:any, {articleKey}) => {
  const articleDate = moment(article.published_date).format('MM/DD/YYYY');
  const classes = useStyles();

  const byline = article.byline.length > 0 ? "| " + article.byline : "";

  console.log(article);
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }} variant="outlined">
        <Typography variant='h5' className={classes.title}>
          {article.title}
        </Typography>
        <CardMedia
        component="img"
        height="140"
        image={article.multimedia[0].url}
        alt={article.multimedia[0].caption}
        />
        <p className={classes.articleDate}>{articleDate} {byline}</p>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6'>
            {article.abstract}
          </Typography>
          <Link component="button" variant="body1" href={article.short_url}>Read more...</Link>
        </CardContent>
      </Card>
    </Grid>

  )
};

export default Article;