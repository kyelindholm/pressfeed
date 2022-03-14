
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Toolbar, Typography} from '@mui/material';
import SearchBar from './SearchBar'

import { AppbarProps } from '../../types';

const Menu: React.FC<AppbarProps> = ({filterFeed}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <SearchBar filterFeed={filterFeed}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;

