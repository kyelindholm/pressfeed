import React from "react";
import moment from "moment";
import { ArticleProps } from "../../types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import useStyles from "../styles/styles";

const Article: React.FC<ArticleProps> = ({ article }: any, { articleKey }) => {
  const articleDate = moment(article.published_date).format("MM/DD/YYYY");
  const classes = useStyles();
  const byline = article.byline.length > 0 ? "| " + article.byline : "";

  const photo: string = article.multimedia !== null ? article.multimedia[0].url : "https://demofree.sirv.com/nope-not-here.jpg";
  const caption: string = article.multimedia !== null ? article.multimedia[0].caption : "cannot load caption";

  return (
    <Grid item xs="auto">
      <Card sx={{ maxWidth: 300 }} variant="outlined">
        <Typography variant="h5" className={classes.title}>
          {article.title}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={photo}
          alt={caption}
          className={classes.cardMedia}
        />
        <p className={classes.articleDate}>
          {articleDate} {byline}
        </p>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {article.abstract}
          </Typography>
          <Button variant="contained" href={article.short_url} target="_blank">
            Read more...
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Article;
