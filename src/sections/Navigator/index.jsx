import "../../index.css";
//icons
import { FaUserCog } from "react-icons/fa";
//context
import { useState } from "react";
import { useContext } from "react";
import { DocContext } from "../../Context/DocContext";
//react-router
import { NavLink } from "react-router-dom";
//Material UI
import {
  AppBar,
  Container,
  Box,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
//Auth
import { useAuth } from "../../Context/AuthContext";

function Navigator() {
  const auth = useAuth();
  const [state, dispatch] = useContext(DocContext);
  const { initialStore, StatesModals } = state;
  const { storage } = initialStore ? initialStore : {};
  const [config, setConfig] = useState(false);
  const handleCloseUserMenu = () => {
    setConfig((prevConfig) => !prevConfig);
  };
  const settings = [{name:'Logout', function:auth.logOut}];
  const routes = [
    {
      to: "/",
      text: "Reporteador",
    },
    {
      to: "/Mantenimientos",
      text: "Mantenimientos",
    },
  ];

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        top: "80px",
        height: "50px",
        alignItems: "center",
        zIndex:'1'
      }}
    >
      <Container
        maxWidth="50%"
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          gap: "40px",
        }}>
          
        {routes.map((route) => (
          <NavLink
            className="navLink"
            style={({ isActive }) => ({
              color: isActive ? "rgb(7, 23, 46)" : "white",
            })}
            to={route.to}
            key={route.to}
          >
            {route.text}
          </NavLink>
        ))}
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          marginRight: "5%",
        }}
      >
        <Tooltip
          title="Open settings"
          sx={{ display: "flex", height: "100%", alignItems: "center" }}
        >
          <IconButton onClick={handleCloseUserMenu}>
            <FaUserCog />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "110px" }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(config)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting.name} onClick={setting.function}>
              <Typography textAlign="center">{setting.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </AppBar>
  );
}

export { Navigator };
