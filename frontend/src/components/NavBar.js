import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Dark Mode Icon
import LightModeIcon from "@mui/icons-material/LightMode"; // Light Mode Icon
import "./NavBar.css";

function NavBar({ setPage, darkMode, setDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        {/* Clickable Title -> Navigates to Home */}
        <Typography
          variant="h6"
          className="navbar-title"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          Adaptive Threat Intelligence
        </Typography>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Button color="inherit" onClick={() => setPage("dashboard")}>Dashboard</Button>
          <Button color="inherit" onClick={() => setPage("logs")}>Logs</Button>

          {/* Modern Dark Mode Button */}
          <IconButton onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
            {darkMode ? <LightModeIcon style={{ color: "#FFD700" }} /> : <DarkModeIcon />}
          </IconButton>

          {/* Hamburger Menu */}
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen} className="menu-icon">
            <MenuIcon />
          </IconButton>
        </div>

        {/* Mobile Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => { setPage("dashboard"); handleMenuClose(); }}>Dashboard</MenuItem>
          <MenuItem onClick={() => { setPage("logs"); handleMenuClose(); }}>Logs</MenuItem>
          <MenuItem onClick={() => { setDarkMode(!darkMode); handleMenuClose(); }}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
