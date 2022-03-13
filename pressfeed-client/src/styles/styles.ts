import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    paddingTop: "3%",
    float: "right",
    maxHeight: "100vh",
    overflow: "scroll"
  },
  icon: {
    padding: "5%",
    fontWeight: "900",
    color: "#2074d4",
    textAlign: "center"
  },
  appbar: {
    position: "relative",
  },
  title: {
    padding: "2%",
    fontWeight: "900"
  },
  articleDate: {
    fontSize: "small",
    marginTop: "0",
    marginLeft: "2%",
    marginRight: "2%"
  },
  cards: {
    maxHeight: "450px",
  },
  cardMedia: {
    width: "90%",
    padding: "2%",
    borderRadius: "10px"
  },
  drawer: {
    width: "240px",
  },
  drawerPaper: {
    width: "240px"
  }
}));

export default useStyles;