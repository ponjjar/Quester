import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import themeStyle from "./api/Theme";
import Translator from "./api/Translator";
import {
  Collapse,
  FormControl,
  Icon,
  Input,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import { Close, PhotoCamera } from "@mui/icons-material";
import { width } from "@mui/system";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

function ResponsiveAppBar(props) {
  const userLang = props.userLang == undefined ? "en" : props.userLang;
  const settings = [
    Translator("profile", userLang),
    Translator("logout", userLang),
  ];
  const [configsMenu, setConfigsMenu] = React.useState(false);
  const [userName, setUsername] = React.useState(null);
  const [userAvatar, setAvatar] = React.useState(null);
  if (localStorage.getItem("avatar") != null && userAvatar == null) {
    setAvatar(localStorage.getItem("avatar"));
  } else if (localStorage.getItem("avatar") === null && userAvatar != null) {
    localStorage.setItem("avatar", userAvatar);
  }
  if (localStorage.getItem("username") != null && userName == null) {
    setUsername(localStorage.getItem("username"));
  } else if (localStorage.getItem("username") === null && userName != null) {
    localStorage.setItem("username", userName);
  }

  const pages = Translator("tabs", userLang);

  const moveTo = [
    "/",
    "/" +
      [
        "Why im clicking here?",
        "why is the sky blue?",
        "why is the grass green?",
        "why is the sun yellow?",
        "why is the moon white?",
        "why the earth is round?",
        
      ][Math.floor(Math.random() * 6)],
    "/readme",
    "/about",
  ];
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
    <>
      <AppBar
        style={{
          backgroundImage: `linear-gradient(to right, ${props.theme.palette.appBar.primary},  ${props.theme.palette.appBar.secondary})`,
        }}
        position="static"
      >
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
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Quester
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={(e) => {
                      handleCloseNavMenu(e);
                      // navigate to index moveto
                      window.location.replace(moveTo[index]);
                    }}
                  >
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
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  href={moveTo[index]}
                  onClick={(e) => {
                    handleCloseNavMenu(e);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    borderBottom: "2px solid transparent",
                    "&:hover": { borderBottom: "2px solid white" },
                    marginRight: "10px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={Translator("openSettings", userLang)}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userName} src={userAvatar} />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={setting}
                    onClick={(e) => {
                      handleCloseUserMenu(e);
                      if (index == 0) {
                        setConfigsMenu(true);
                      } else if (index == 1) {
                        localStorage.setItem("avatar", null);
                        localStorage.setItem("userName", null);
                        localStorage.clear();
                        setAvatar(null);
                        setUsername(null);
                      }
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Collapse
              in={configsMenu && userName != null}
              orientation="horizontal"
            >
              <Typography
                sx={{
                  display: { xs: "none", md: "flex", marginLeft: "10px" },
                  backgroundColor: "#2933476c",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  borderRadius: "20px",
                }}
                variant="subtitle1"
                noWrap
                component="div"
              >
                {userName}
              </Typography>
            </Collapse>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={configsMenu}
        sx={{
          padding: "50px",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
        key="change settings (username + avatar)"
        onClose={() => setConfigsMenu(!configsMenu)}
      >
        <Box
          sx={{
            position: "relative",
            width: "80%",
            minWidth: "250px",
            maxWidth: "400px",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "hidden",
            padding: "2rem",
            borderRadius: "20px",
            flexDirection: "column",
            backgroundColor: props.theme.palette.background.default,
            border: "1px solid " + props.theme.palette.primary.main,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              color: props.theme.palette.primary.main,
            }}
            onClick={() => setConfigsMenu(!configsMenu)}
          >
            <Close />
          </IconButton>
          <FormControl fullWidth>
            <label
              htmlFor="contained-button-file"
              style={{
                alignSelf: "center",
              }}
            >
              <Avatar
                alt={userName}
                src={userAvatar}
                sx={{
                  width: "120px",
                  height: "120px",
                  alignSelf: "center",
                  border: "6px solid " + props.theme.palette.primary.main,
                }}
              />
            </label>

            <IconButton sx={{ width: "fit-content", alignSelf: "center" }}>
              <label
                htmlFor="contained-button-file"
                sx={{
                  alignSelf: "center",
                }}
              >
                <PhotoCamera color="primary" />
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  hidden
                  sx={{
                    display: "none",
                    width: "fit-content",
                    alignSelf: "center",
                    height: "fit-content",
                  }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                      setAvatar(reader.result);
                      localStorage.setItem("avatar", reader.result);
                    };
                  }}
                />
              </label>
            </IconButton>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <TextField
                id="outlined-basic"
                fullWidth
                label={Translator("username", userLang)}
                placeholder={
                  ["Jhon Doe", "Caique", "Maria", "Diogo", "Julia"][
                    Math.floor(Math.random() * 5)
                  ]
                }
                variant="outlined"
                style={{
                  backgroundColor: props.theme.palette.background.paper,
                }}
                value={userName}
                onChange={(e) => {
                  setUsername(e.target.value);
                  localStorage.setItem("username", e.target.value);
                }}
              />
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}
export default ResponsiveAppBar;
