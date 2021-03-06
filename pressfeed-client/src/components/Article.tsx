import React, { useState, useLayoutEffect, useRef } from "react";
import moment from "moment";
import { ArticleProps } from "../../types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  Checkbox
} from "@mui/material";

import {useStyles} from "../styles/styles";

const Article: React.FC<ArticleProps> = ({ article, articleFunctions, favorites }: any) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(favorites.includes(article.short_url));
  const [articleId, setArticleId] = useState('');

  const firstUpdate = useRef(false);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      checked ? articleFunctions.addToFavorites(articleId) : articleFunctions.removeFromFavorites(articleId);
      return;
    } else {
      firstUpdate.current = true;
    }
  })

  const articleDate = moment(article.published_date).format("MM/DD/YYYY");
  const byline = article.byline !== null && article.byline !== undefined && article.byline.length > 0 ? "| " + article.byline : "";
  const photo: string = article.multimedia !== null ? article.multimedia[0].url : "https://demofree.sirv.com/nope-not-here.jpg";
  const caption: string = article.multimedia !== null ? article.multimedia[0].caption : "cannot load caption";
  const checkboxLabel = { inputProps: { 'aria-label': 'Add-article-to-favorites checkbox' } };

  return (
    <Grid item xs="auto">
      <Card variant="outlined" className={classes.cards} style={{maxWidth: "20vw"}}>
        <Typography variant="h5" style={{fontWeight: "bold", padding: "2%"}}>
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
          <Checkbox {...checkboxLabel} icon={favorites.includes(article.short_url) ? <Favorite/> : <FavoriteBorder/>} checkedIcon={favorites.includes(article.short_url) ? <FavoriteBorder/> : <Favorite/>} style={{float: "right"}} id={article.short_url} onChange={() => {setChecked(!checked);}} onClick={(e) => {
            setArticleId((e.target as HTMLInputElement).id);
          }}/>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Article;
