import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from './components/Feed';
import {Button} from '@mui/material';
import './App.css';



const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then((data) => {
        setArticles(data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Feed articles={articles}/>
      <Button>Hi</Button>
    </div>
  );
}

export default App;
