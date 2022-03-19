import React, { useState, useEffect } from "react";
import Feed from "./components/Feed";
import Appbar from "./components/Appbar";
import Menu from "./components/Menu";
import RadioButtons from "./components/RadioButtons";
import {refreshFeed, addToDatabase, removeFromDatabase, getFavorites} from "./api-routes/routes";
import { CssBaseline } from "@mui/material";
import "./styles/App.css";

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);
  const [filteredArticles, setFilteredArticles] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<Array<any>>([]);
  const [display, setDisplay] = useState<Array<any>>([]);

  const updateFavorites = async () => {
    const newFavorites = await getFavorites();
    setFavorites(newFavorites);
  }

  useEffect(() => {
    const getData = async () => {
      const data = await refreshFeed("Home");
      await setArticles(data.data);
      setDisplay(data.data);
    };
    getData();
    updateFavorites();
  }, []);

  const newMenuProps = {
    handleUpdateFeed: (section: string): void => {
      refreshFeed(section)
        .then((data) => {
          setArticles(data.data);
          setDisplay(data.data);
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
        display.filter((article) =>
          article.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    },
  };

  const radioButtonFunctions = {
    handleClickFeed: () => {
      setDisplay(articles);
    },
    handleClickFavorites: () => {
      setDisplay(favorites);
    }
  }

  const articleFunctions = {
    addToFavorites: (id: string) => {
      const addFavorite = async () => {
        await addToDatabase(articles.filter((article) => article.short_url === id)[0]);
        updateFavorites();
      }
      addFavorite();
    },
    removeFromFavorites: (url: string) => {
      const removeFavorite = async () => {
        await removeFromDatabase(url);
        updateFavorites();
      }
      removeFavorite();
    }
  }


  return (
    <div>
      <CssBaseline />
      <Appbar {...feedProps} />
      <main>
        <Menu {...newMenuProps} />
        <RadioButtons radioButtonFunctions={radioButtonFunctions}/>
        <Feed articleFunctions={articleFunctions} articles={searchTerm.length >= 3 ? filteredArticles : display} favorites={favorites}/>
      </main>
    </div>
  );
};

export default App;
