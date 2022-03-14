import React from 'react';
import Article from './Article';
import {Props} from '../../types'
import { Container, Grid } from '@mui/material'

import useStyles from '../styles/styles';

let articleKey: number = 0;

const Feed: React.FC<Props> = ({articles}) => {
  const classes = useStyles();

  if (articles !== undefined) {
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={6} columns={3} style={{paddingLeft: "5%"}}>
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