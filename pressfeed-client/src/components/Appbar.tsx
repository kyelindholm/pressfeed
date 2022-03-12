import {AppBar, Toolbar, Typography} from "@mui/material";
import React from "react";

import useStyles from "../styles/styles";


const Appbar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar} style={{ zIndex: 1301 }}>
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit" component="div">
            Pressfeed
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Appbar;

