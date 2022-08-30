import {
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Link,
} from "@mui/material";
import React from "react";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { styled } from "@mui/material/styles";

const Search = styled("div")(theme => ({
  backgroundColor: "whitesmoke",
  fontSize: "24px",
  borderRadius: "50px 0 0 50px",
  padding: "2px 0 2px 20px",
}));

// Material UI Icon styling inside badge
const MuiBadge = styled(Badge)({
  color: "#333333",
  cursor: "pointer",
  transition: "0.5s ease-in-out",
  "&:hover": {
    color: "#0088ff",
  },
});

const MidNavDesktop = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderBottom: "1px solid #f5f5f5",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            placeItems: "center",
            padding: "15px 0",
          }}
        >
          <Grid item md={3}>
            <Link
              variant="h5"
              href="#"
              title="Home page"
              sx={{
                flexGrow: 1,
                color: "#0088ff",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              e-Store
            </Link>
          </Grid>
          <Grid
            item
            md={6}
            container
            sx={{
              flexGrow: 1,
              backgroundColor: "#0088ff",
              borderRadius: "50px",
              padding: "2px 0 2px 4px",
              placeItems: "center",
            }}
          >
            <Grid item flexGrow={1}>
              <Search>
                <InputBase
                  placeholder="Search..."
                  sx={{ width: "95%" }}
                ></InputBase>
              </Search>
            </Grid>
            <Grid
              item
              sx={{
                color: "whitesmoke",
                fontSize: "32px",
                backgroundColor: "#0088ff",
                marginRight: "4px",
                padding: "0 15px",
                borderRadius: "0 50px 50px 0",
              }}
            >
              <IconButton sx={{ fontSize: "28px", color: "whitesmoke" }}>
                <SearchRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container md={3}>
            <MuiBadge
              badgeContent={3}
              color="primary"
              sx={{ marginLeft: "auto" }}
            >
              <RepeatRoundedIcon sx={{ fontSize: "32px" }} />
            </MuiBadge>
            <MuiBadge
              badgeContent={3}
              color="primary"
              sx={{ marginLeft: "30px" }}
            >
              <FavoriteBorderRoundedIcon sx={{ fontSize: "32px" }} />
            </MuiBadge>
            <MuiBadge
              badgeContent={3}
              color="primary"
              sx={{ marginLeft: "30px" }}
            >
              <ShoppingBagOutlinedIcon sx={{ fontSize: "32px" }} />
            </MuiBadge>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MidNavDesktop;
