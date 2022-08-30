import { List, ListItemButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const BottomNavMenu = () => {
  // Jewelry
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Accessories
  const [anchorElAccess, setAnchorElAccess] = useState(null);
  const openAccess = Boolean(anchorElAccess);

  // Clothing
  const [anchorElClothing, setAnchorElClothing] = useState(null);
  const openClothing = Boolean(anchorElClothing);

  // News
  const [anchorElNews, setAnchorElNews] = useState(null);
  const openNews = Boolean(anchorElNews);

  // Jewelry
  const handleMenu = event => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Accessories
  const handleOpenAccessories = event => {
    setAnchorElAccess(event?.currentTarget);
  };

  const handleCloseAccessories = event => {
    setAnchorElAccess(null);
  };

  // Clothing
  const handleOpenClothing = event => {
    setAnchorElClothing(event?.currentTarget);
  };

  const handleCloseClothing = event => {
    setAnchorElClothing(null);
  };

  // News
  const handleOpenNews = event => {
    setAnchorElNews(event?.currentTarget);
  };

  const handleCloseNews = event => {
    setAnchorElNews(null);
  };

  return (
    <List sx={{ display: "flex" }}>
      <ListItemButton onClick={handleMenu}>
        Jewelry
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem dense="true">Shoes</MenuItem>
        <MenuItem dense="true">Clothing</MenuItem>
        <MenuItem dense="true">Shop & Collection</MenuItem>
      </Menu>

      <ListItemButton onClick={handleOpenAccessories}>
        Accessories
        {openAccess ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Menu
        open={openAccess}
        anchorEl={anchorElAccess}
        onClose={handleCloseAccessories}
      >
        <MenuItem>Shoes</MenuItem>
        <MenuItem>Clothing</MenuItem>
        <MenuItem>Shop & Collection</MenuItem>
      </Menu>

      <ListItemButton onClick={handleOpenClothing}>
        Clothing
        {openClothing ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Menu
        open={openClothing}
        anchorEl={anchorElClothing}
        onClose={handleCloseClothing}
      >
        <MenuItem>Shoes</MenuItem>
        <MenuItem>Clothing</MenuItem>
        <MenuItem>Shop & Collection</MenuItem>
      </Menu>

      <ListItemButton onClick={handleOpenNews}>
        News
        {openNews ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Menu open={openNews} anchorEl={anchorElNews} onClose={handleCloseNews}>
        <MenuItem>Shoes</MenuItem>
        <MenuItem>Clothing</MenuItem>
        <MenuItem>Shop & Collection</MenuItem>
      </Menu>
    </List>
  );
};

export default BottomNavMenu;
