import { Theme, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled, alpha } from '@mui/material/styles';


export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    paddingTop: "3%",
    float: "right",
    maxHeight: "100vh",
    overflow: "scroll",
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
  articleDate: {
    fontSize: "small",
    marginTop: "0",
    marginLeft: "2%",
    marginRight: "2%"
  },
  cards: {
    maxWidth: "300px",
  },
  cardMedia: {
    width: "95%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    borderRadius: "10px",
  },
  drawer: {
    width: "240px",
  },
  drawerPaper: {
    width: "240px"
  },
  searchbar: {
    zIndex: "10000",
    float: "right"
  }
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

