import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: "20px"
  },
  icon: {
    marginRight: '20px'
  },
  title: {
    padding: "2%",
    fontWeight: "900"
  },
  articleDate: {
    fontSize: "small",
    marginTop: "0",
    marginLeft: "1%"
  },
  cards: {
    maxHeight: "450px",
    overflowY: "scroll"
  },
  cardMedia: {
    width: "90%",
    padding: "2%",
    borderRadius: "10px"
  }
}));

export default useStyles;