import React from 'react';
import Article from './Article';
import { Container, Grid } from '@mui/material'

interface Props {
  articles: Array<any> | void | undefined
}

let articleKey: number = 0;

const Feed: React.FC<Props> = ({articles}) => {
  if (articles !== undefined) {
    return (
      <Container maxWidth="md">
        <Grid container spacing={4}>
        {articles.map((article) => {
          articleKey ++;
          return (
            <Article article={article} key={articleKey}/>
          )
        })}
        </Grid>
      </Container>
    )
  } else {
    return <div/>;
  }
};

export default Feed;