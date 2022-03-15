import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../styles/styles";
import SearchIcon from '@mui/icons-material/Search';

import { AppbarProps } from "../../types";


const SearchBar: React.FC<AppbarProps> = ({filterFeed}) => {

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          filterFeed(e.target.value);
        }}
      />
    </Search>
  );
};

export default SearchBar;
