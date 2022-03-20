import React, { useEffect, useState } from 'react';
import Article from './Article';
import {FeedProps} from '../../types'
import { Container, Grid } from '@mui/material'

import {useStyles} from '../styles/styles';

let articleKey: number = 0;

const Feed: React.FC<FeedProps> = ({articles, articleFunctions, favorites}) => {
  const classes = useStyles();
  const [favoriteUrls, setFavoriteUrls] = useState<Array<any>>([]);

  useEffect(() => {
    let newFavoriteUrls = favorites.map((favoriteArticle) => favoriteArticle.short_url);
    setFavoriteUrls(newFavoriteUrls);
  }, [favorites]);

  if (articles !== undefined && articles.length > 0) {
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={6} columns={3} style={{paddingLeft: "5%"}}>
        {articles.map((article) => {
          articleKey ++;
          return (
            <Article article={article} key={articleKey} articleFunctions={articleFunctions} favorites={favoriteUrls}/>
          )
        })}
        </Grid>
      </Container>
    )
  } else {
    return <div style={{textAlign: "center"}}>No article titles found matching given search term!</div>;
  }
};

export default Feed;