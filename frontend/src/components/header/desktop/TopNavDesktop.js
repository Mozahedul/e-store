import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const TopNavDesktop = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(248, 248, 248)",
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            backgroundColor: "rgb(248, 248, 248)",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <Grid item container md={6} spacing={2}>
            <Grid item>
              <Typography sx={{ fontSize: "14px" }}>
                <IconButton sx={{ color: "#0088ff", fontSize: "14px" }}>
                  <LocalPhoneRoundedIcon />
                </IconButton>
                (+880) 1738648749
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <IconButton sx={{ color: "#0088ff", fontSize: "14px" }}>
                  <MailOutlineRoundedIcon />
                </IconButton>
                mozahed001@gmail.com
              </Typography>
            </Grid>
          </Grid>

          <Grid item container md={6} sx={{ justifyContent: "end" }}>
            <Grid item>
              <Typography>
                <IconButton sx={{ color: "#0088ff", fontSize: "14px" }}>
                  <RoomOutlinedIcon />
                </IconButton>
                Store location
              </Typography>
            </Grid>
            <Grid>
              <Typography>
                <IconButton
                  sx={{
                    color: "#0088ff",
                    fontSize: "14px",
                    marginLeft: "15px",
                  }}
                >
                  <PersonOutlineRoundedIcon />
                </IconButton>
                <Link href="#">Sign in</Link> or <Link href="#">Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopNavDesktop;
