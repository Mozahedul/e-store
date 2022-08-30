import {
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

const AllDepartments = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid item>
        <Button
          onClick={handleMenu}
          onClose={handleClose}
          variant="contained"
          startIcon={<FormatListBulletedRoundedIcon />}
          sx={{ maxWidth: "100%", width: "200px", fontSize: "12px" }}
        >
          Departments
        </Button>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          PaperProps={{
            style: { width: "200px", maxWidth: "100%", padding: 0 },
          }}
        >
          <MenuItem dense="true">
            <ListItemText>Top 100 Offers</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}

          <MenuItem dense="true">
            <ListItemText>Gadget</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}

          <MenuItem dense="true">
            <ListItemText>All in One</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}

          <MenuItem dense="true">
            <ListItemText>Fashion</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem dense="true">
            <ListItemText>New Arrival</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem dense="true">
            <ListItemText>Health & Beauty</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem dense="true">
            <ListItemText>Shoes</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem dense="true">
            <ListItemText>Costumes</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem dense="true">
            <ListItemText>Cosmetics</ListItemText>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>
        </Menu>
      </Grid>
    </>
  );
};

export default AllDepartments;
