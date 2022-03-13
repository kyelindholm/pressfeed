import React, { useState, useEffect } from "react";
import Feed from "./components/Feed";
import Appbar from "./components/Appbar";
import Menu from "./components/Menu";
import refreshFeed from "./api-routes/routes"
import {CssBaseline} from "@mui/material";
import './styles/App.css'

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await refreshFeed('Home');
      setArticles(data.data);
    }
    getData();
  }, []);

  const newMenuProps = {
    handleUpdateFeed: (section: string):void => {
      refreshFeed(section)
        .then(data => {
          setArticles(data.data);
        })
        .catch(err => {throw err;});
    }
  }

  return (
    <div>
      <CssBaseline/>
      <Appbar/>
      <main>
        <Menu {...newMenuProps}/>
        <Feed articles={articles} />
      </main>
    </div>
  );
};

export default App;
