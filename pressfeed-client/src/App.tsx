import React, { useState, useEffect } from "react";
import Feed from "./components/Feed";
import Appbar from "./components/Appbar";
import Menu from "./components/Menu";
import RadioButtons from "./components/RadioButtons";
import {refreshFeed, addToDatabase, removeFromDatabase} from "./api-routes/routes";
import { CssBaseline } from "@mui/material";
import "./styles/App.css";

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);
  const [filteredArticles, setFilteredArticles] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await refreshFeed("Home");
      setArticles(data.data);
    };
    getData();
  }, []);

  const newMenuProps = {
    handleUpdateFeed: (section: string): void => {
      refreshFeed(section)
        .then((data) => {
          setArticles(data.data);
        })
        .catch((err) => {
          throw err;
        });
    },
  };

  const feedProps = {
    filterFeed: (term: string) => {
      setSearchTerm(term);
      setFilteredArticles(
        articles.filter((article) =>
          article.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    },
  };

  const articleFunctions = {
    addToFavorites: (id: string) => {
      addToDatabase(articles.filter((article) => article.short_url === id)[0]);
    },
    removeFromFavorites: (id: string) => {
      removeFromDatabase(articles.filter((article) => article.short_url === id)[0]);
    }
  }

  return (
    <div>
      <CssBaseline />
      <Appbar {...feedProps} />
      <main>
        <Menu {...newMenuProps} />
        <RadioButtons/>
        <Feed articleFunctions={articleFunctions} articles={searchTerm.length >= 3 ? filteredArticles : articles}/>
      </main>
    </div>
  );
};

export default App;
