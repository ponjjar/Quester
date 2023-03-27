import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import themeStyle from './api/Theme';
import Translator from './api/Translator';
 


function ResponsiveAppBar(props) {
    const userLang = props.userLang == undefined? 'en' : props.userLang;
    
    const pages = Translator('tabs',userLang);
    
    const moveTo =  ['/', '/' + ['Why im clicking here?',
    'why is the sky blue?',
    'why is the grass green?',
    'why is the sun yellow?',
    'why is the moon white?',
    'why the earth is round?'
  ][Math.floor(Math.random() * 6)]
   , '/readme','/about'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <AppBar
      style={ 
        {
          backgroundImage: `linear-gradient(to right, ${props.theme.palette.appBar.primary},  ${props.theme.palette.appBar.secondary})`,
          
        }
      }
      position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <img
                        style={{
                          borderRadius: "50%",
                          float: "Left",
                        }}
                        src={process.env.PUBLIC_URL + "/logolight.png"}
                        width={"50px"}
                        align="middle"
                      />
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
              }}
            >
              Quester
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
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
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((
                page, index) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={moveTo[index]}
                  
                  sx={{ my: 2, color: 'white', display: 'block', borderBottom: '2px solid transparent', '&:hover': { borderBottom: '2px solid white' }, marginRight: '10px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
  
            
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default ResponsiveAppBar;