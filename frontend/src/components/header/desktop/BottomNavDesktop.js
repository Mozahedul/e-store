import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import AllDepartments from "../BottomNavDeskParts/AllDepartments";
import BottomNavMenu from "../BottomNavDeskParts/BottomNavMenu";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const BottomNavDesktop = () => {
  return (
    <Box>
      <Container>
        <Grid container sx={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <AllDepartments />
          </Grid>
          <Grid item container xs={7} sx={{ justifyContent: "center" }}>
            <BottomNavMenu />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link
              href="#"
              alt="order link"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#333333",
                textDecoration: "none",
              }}
            >
              <MailOutlineOutlinedIcon />
              <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                Messages
              </Typography>
            </Link>
            <Link
              href="#"
              alt="order link"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#333333",
                textDecoration: "none",
                marginLeft: "30px",
              }}
            >
              <CardGiftcardRoundedIcon />
              <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                Orders
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BottomNavDesktop;
