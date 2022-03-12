import {Drawer, Typography, List, ListItem, ListItemText} from "@mui/material";
import React from "react";
import useStyles from "../styles/styles";

const Menu: React.FC = () => {
  const classes = useStyles();

  const menuItems: string[] = ["Home", "Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Movies", "Politics", "Science", "Sports", "Technology", "Theater", "Travel", "World"]

  return (
    <Drawer
     className={classes.drawer}
     variant="persistent"
     anchor="left"
     open={true}
     classes={{ paper: classes.drawerPaper}}
     >
      <div>
        <Typography variant="h4" className={classes.icon}>
          Pressfeed
        </Typography>
      </div>
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem>
              <ListItemText primary={item}/>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}

export default Menu;