// import styled from "@emotion/styled";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

// For styling Material UI component with it's class
// Find out class by using browser's dev tool
const BadgeMui = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    border: "1px solid green",
    padding: "4px",
    color: "red",
  },
}));

export { BadgeMui };
