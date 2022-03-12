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
    padding: "2%"
  },
  articleDate: {
    fontSize: "small",
    marginTop: "0",
    marginLeft: "1%"
  },
  cards: {
    maxHeight: "400px",
  },
  cardContent: {
    overflow: "scroll"
  }
}));

export default useStyles;