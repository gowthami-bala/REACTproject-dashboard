import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GamesIcon from '@mui/icons-material/Games';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';
import { WeatherReport } from './weatherReport';
import DateRangeCalendarCalendarsProp from './calendar';
import { useState } from 'react';
import { Game } from '../game/Game';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;

export default function ClippedDrawer() {
 
  const location=useLocation()
  const [username, setusername] = useState(location.state.username);
  const [auth, setAuth] = useState(true);
  const [sideMenu, setSideMenu] = useState(['Home', 'Inbox']);
  const [sideMenuDown, setSideMenuDown] = useState(['Game', 'Trash']);
  const [selectedItem, setSelectedITem] = useState('Home')
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()
  const handleItemClick = (value) => {
    setSelectedITem(value)
  }

  const handleLogout = () => {
    navigate('/login');
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    console.log(typeof(username));
    setAnchorElUser(null);
  };
  const stringAvatar=(name)=> {
    // console.log(name);
            return {
              children: `${name.split(' ')[0][0]}`,
            };
          }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ backgroundColor: "white" }}>
          <Toolbar>
            <img src='../miracle-logo-dark.png' alt="" height="35" width="120"></img>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="flex-end">
              <Grid item xs={12}>
                <label style={{ color: "black" }}>{username}</label>
                <IconButton onClick={handleOpenUserMenu} >
                  <Avatar  {...stringAvatar(username)}/>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                    <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Profile</Typography>                     
                    </MenuItem>
                    <MenuItem  onClick={handleLogout}>
                    <Typography textAlign="center">Logout </Typography>
                    <LogoutIcon/>
                    </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', backgroundColor: '#323237', height: '100%', color: 'white' }}>
            <List>
              {sideMenu.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleItemClick(text)} >
                    <ListItemIcon style={{ color: 'white' }}>
                      {index === 0 && <Home />}
                      {index === 1 && <InboxIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List >
              {sideMenuDown.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleItemClick(text)}>
                    <ListItemIcon style={{ color: 'white' }}>
                      {index === 0 ? <GamesIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        {selectedItem === 'Home' && <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={0} >
            <Grid item xs={4} style={{ backgroundColor: "white", display: 'flex', }}>
              <DateRangeCalendarCalendarsProp ></DateRangeCalendarCalendarsProp>
            </Grid>
            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <WeatherReport></WeatherReport>
            </Grid>
          </Grid>
        </Box>}
        {selectedItem === 'Game' && <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
          <Toolbar />
          <Game></Game>
        </Box>}
      </Box>
    </>
  );
}