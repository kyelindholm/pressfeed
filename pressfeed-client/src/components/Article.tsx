import React from 'react';
import moment from 'moment';

interface Props {
  article: object,
  key: number
}

const Article: React.FC<Props> = ({article}:any, {articleKey}) => {


  return (
    <div key={articleKey}>
      <p>Title: {article.title}</p>
      <p>{moment(article.published_date).format('MM/DD/YYYY')} | {article.byline}</p>
    </div>
  )
};

export default Article;