import {Drawer, Typography, List, ListItemText, ListItemIcon, ListItemButton} from "@mui/material";
import {HomeRounded, ColorLensRounded, DirectionsCarRounded, BookRounded, BusinessRounded, CheckroomRounded, RestaurantRounded, LocalHospitalRounded, MovieRounded, AccountBalanceRounded, ScienceRounded, SportsSoccerRounded, DevicesRounded, TheaterComedyRounded, FlightRounded, PublicRounded} from '@mui/icons-material'
import React, {useState} from "react";
import useStyles from "../styles/styles";

const Menu: React.FC = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('Home');

  const menuItems: Array<any> = [{text: "Home", icon: <HomeRounded/>}, {text: "Arts", icon: <ColorLensRounded/>}, {text: "Automobiles", icon: <DirectionsCarRounded/>}, {text: "Books", icon: <BookRounded/>}, {text: "Business", icon: <BusinessRounded/>}, {text: "Fashion", icon: <CheckroomRounded/>}, {text: "Food", icon: <RestaurantRounded/>}, {text: "Health", icon: <LocalHospitalRounded/>}, {text: "Movies", icon: <MovieRounded/>}, {text: "Politics", icon: <AccountBalanceRounded/>}, {text: "Science", icon: <ScienceRounded/>}, {text: "Sports", icon: <SportsSoccerRounded/>}, {text: "Technology", icon: <DevicesRounded/>}, {text: "Theater", icon: <TheaterComedyRounded/>}, {text: "Travel", icon: <FlightRounded/>}, {text: "World", icon: <PublicRounded/>}]

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
            <ListItemButton key={item.text} id={activeTab === item.text ? 'not-active' : 'active'} onClick={(event) => {
              setActiveTab(item.text);
              console.log((event.target as Element).id);
            }}>
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