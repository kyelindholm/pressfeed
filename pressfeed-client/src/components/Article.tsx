import React from 'react';

interface Props {
  article: object,
  key: number
}

const Article: React.FC<Props> = ({article}:any, {articleKey}) => {
  return (
    <div key={articleKey}>
      <p>Title: {article.title}</p>
    </div>
  )
};

export default Article;