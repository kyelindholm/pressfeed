import {Drawer, Typography, List, ListItemText, ListItemIcon, ListItemButton} from "@mui/material";
import React, {useState} from "react";
import menuItems from "../constants/constants";
import useStyles from "../styles/styles";

const Menu: React.FC = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const buttonProps = (value: number) => ({
    selected: selectedIndex === value,
    onClick: () => setSelectedIndex(value)
  });

  let buttonCounter: number = 0;



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
          buttonCounter ++;
          return (
            <ListItemButton key={item.text} {...buttonProps(buttonCounter)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          )
        })}
      </List>
    </Drawer>
  )
}

export default Menu;