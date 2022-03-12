import React, { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./components/Feed";
import Appbar from "./components/Appbar";
import Menu from "./components/Menu";
import {CssBaseline} from "@mui/material";
import './styles/App.css'

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((data) => {
        setArticles(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <CssBaseline/>
      <Appbar/>
      <main>
        <Menu/>
        <Feed articles={articles} />
      </main>
    </div>
  );
};

export default App;
