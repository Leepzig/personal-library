import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Box sx={{ flexGrow: 1 }}> */}
            <Typography variant="h6" component="div" sx={{ padding:1  }}>
                <NavLink to="/">Home</NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{padding: 1 }}>
                <NavLink to="/">New Series</NavLink>
            </Typography>
          {/* </Box> */}
            {/* <NavLink to="/series/new">New Series</NavLink> */}
          
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar