import {
  AppBar,
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import SearchFieldMobile from "./SearchFieldMobile";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const MiuBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#222222",
  },
});

const VisibleHeaderMobile = () => {
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <AppBar sx={{ display: { xs: "flex", md: "none" } }}>
        <Toolbar>
          <Container>
            <Grid container sx={{ placeItems: "center" }}>
              <Grid item container xs={6}>
                <Link href="#">
                  <MenuIcon sx={{ color: "#333333", fontSize: "32px" }} />
                </Link>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    flexGrow: 1,
                    color: "#222222",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  e-Store
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={6}
                sx={{ placeItems: "center", justifyContent: "end" }}
              >
                {show ? (
                  <IconButton onClick={handleClose}>
                    <CloseOutlinedIcon
                      sx={{ color: "#222222", fontSize: "28px" }}
                    />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleSearch}>
                    <SearchIcon sx={{ color: "#222222", fontSize: "28px" }} />
                  </IconButton>
                )}
                <IconButton>
                  <PersonOutlineIcon
                    sx={{
                      color: "#222222",
                      fontSize: "32px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  />
                </IconButton>
                <MiuBadge badgeContent={4} color="primary">
                  <ShoppingBagOutlinedIcon
                    sx={{ color: "#222222", fontSize: "28px" }}
                  />
                </MiuBadge>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      {/* For mobile search field */}
      {show && (
        <Box sx={{ width: "90%", margin: "auto", display: { md: "none" } }}>
          <SearchFieldMobile />
        </Box>
      )}
    </>
  );
};

export default VisibleHeaderMobile;
