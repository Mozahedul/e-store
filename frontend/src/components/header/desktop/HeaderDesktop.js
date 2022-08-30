import { Box, Divider } from "@mui/material";
import React from "react";
import BottomNavDesktop from "./BottomNavDesktop";
import MidNavDesktop from "./MidNavDesktop";
import TopNavDesktop from "./TopNavDesktop";

const HeaderDesktop = () => {
  return (
    <Box display={{ xs: "none", md: "block" }}>
      <TopNavDesktop />
      <MidNavDesktop />
      <BottomNavDesktop />
      <Divider />
    </Box>
  );
};

export default HeaderDesktop;
