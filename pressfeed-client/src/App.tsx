import React, { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./components/Feed";
import { AppBar, Toolbar, IconButton, Typography, CssBaseline} from "@mui/material";
import { Newspaper } from '@mui/icons-material'

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
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Newspaper />
          </IconButton>
          <Typography variant="h4" color="inherit" component="div">
            Pressfeed
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Feed articles={articles} />
      </main>
    </div>
  );
};

export default App;
