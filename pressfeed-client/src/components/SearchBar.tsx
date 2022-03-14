import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../styles/styles";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar: React.FC = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
