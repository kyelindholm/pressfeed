import React from 'react';
import Article from './Article';

interface Props {
  articles: Array<any> | void | undefined
}

let articleKey: number = 0;

const Feed: React.FC<Props> = ({articles}) => {
  if (articles !== undefined) {
    return (
      <div>
        {articles.map((article) => {
          articleKey ++;
          return (
            <Article article={article} key={articleKey}/>
          )
        })}
      </div>
    )
  } else {
    return <div/>;
  }
};

export default Feed;