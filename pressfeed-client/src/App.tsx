import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

let articleKey: number = 0;

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then((data) => {
        setArticles(data.data);
      })
      .catch(err => console.error(err));
  }, []);

  console.log(articles);
  return (
    <div className="App">
      {articles?.map((article) => {
        articleKey ++;
        return (
          <div key={articleKey}>
            {article.title}
          </div>
        )
      })}
    </div>
  );
}

export default App;
