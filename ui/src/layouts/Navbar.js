import {useState} from 'react';
// import {useEffect} from 'react';         -for auth
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';         -for auth
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';         -for auth
import MenuItem from '@mui/material/MenuItem';
import CellTowerIcon from '@mui/icons-material/CellTower';
import { Link } from 'react-router-dom';
// import {isUserLoggedIn, getToken} from '../utility/utils'         -for auth
// import {getUser} from '../utility/api'         -for auth

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
 // const [anchorElUser, setAnchorElUser] = useState(null);  --login setState for auth 
  // const [user, setUser] = useState(null);   --set user after auth
// console.log("user: ", user.username)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //user menu auth function

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };   

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //close user menu auth function

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  //Get user data from API for auth

  // useEffect(() => {
  //   // check if the use is logged in
  //   if (isUserLoggedIn()) {
  //     // get token
  //     const token = getToken()
  //     //fetch user's data
  //     getUser(token)
  //       .then((data) => setUser(data))
  //       .catch((error) => console.log(error))
  //   }
  
  // }, [])

  //settings for auth after user is logged in

  // const settings = [
  //   {
  //     label: 'Profile',
  //     path: `/user/${user?.username}`
  //   }, 
  //   {
  //     label: 'Settings',
  //     path: '/user/settings'
  //   }, 
  //   {
  //     label: 'Logout',
  //     path: '/user/logout'
  //   }, 

  // ]
  
  const pages = [
    {
      label: 'Home',
      path: '/'},
    {
      label: 'Forum Thread',
      path: '/thread'},
      {
        label: 'Calendar',
        path: '/calendar'},
    ]
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
          <CellTowerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />  {/*CHANGE THIS ICON*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              onClick:"/" 

            }}
          >
            AT&T Union Forum
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem component={Link} to={page.path} key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CellTowerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />  {/*CHANGE THIS ICON*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AT&T Union Forum
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                component={Link} 
                to={page.path}
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {/* {!isUserLoggedIn() ?  */} {/* commenting out auth for now */}
            <MenuItem component={Link} to={'/login'} key={'login'}>
              <Typography textAlign="center">LOGIN</Typography>
            </MenuItem>
          {/* :
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.username } src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem component={Link} to={setting.path} key={setting.label} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
          } */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar




