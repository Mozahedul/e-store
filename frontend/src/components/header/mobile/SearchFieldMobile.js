import { IconButton, TextField } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchFieldMobile = () => {
  return (
    <form
      style={{
        marginTop: "70px",
        display: "flex",
      }}
    >
      <TextField fullWidth variant="standard" placeholder="Search..." />
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
    </form>
  );
};

export default SearchFieldMobile;
