import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const MuiContainer = styled(Container)({
  "@media (max-width:780px)": { marginTop: "80px" },
});

const MuiInputLabel = styled(InputLabel)({
  marginTop: "15px",
  fontSize: "14px",
  marginBottom: "4px",
});

const MuiListItem = styled(ListItem)({
  paddingTop: 0,
  paddingBottom: 0,
  fontSize: "14px",
});

const MuiListIconColor = styled(ListItemIcon)({
  color: "green",
});

const Register = () => {
  return (
    <MuiContainer>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Create New Account</Typography>
          <hr />
          <Typography variant="subtitle2">Create your own account</Typography>
          <Box component="form">
            <MuiInputLabel>First Name*</MuiInputLabel>
            <TextField size="small" fullWidth placeholder="John Doe" />
            <MuiInputLabel>Last Name*</MuiInputLabel>
            <TextField size="small" fullWidth placeholder="John Doe" />
            <MuiInputLabel>Email*</MuiInputLabel>
            <TextField
              size="small"
              fullWidth
              placeholder="John Doe"
              type="email"
              helperText="XXXXX@mail.com"
            />
            <MuiInputLabel>Password*</MuiInputLabel>
            <TextField
              size="small"
              fullWidth
              placeholder="John Doe"
              type="password"
              helperText="Greater than 8 characters"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "15px" }}
            >
              Register
            </Button>
          </Box>
          <Box sx={{ marginTop: "30px", color: "#333333" }}>
            <Typography variant="h6">
              Sign up today and you will able to:
            </Typography>
            <List>
              <MuiListItem>
                <MuiListIconColor>
                  <DoneOutlinedIcon />
                </MuiListIconColor>
                <ListItemText>Speed up way through checkout.</ListItemText>
              </MuiListItem>
              <MuiListItem>
                <MuiListIconColor>
                  <DoneOutlinedIcon />
                </MuiListIconColor>
                <ListItemText>Track your orders easily</ListItemText>
              </MuiListItem>
              <MuiListItem>
                <MuiListIconColor>
                  <DoneOutlinedIcon />
                </MuiListIconColor>
                <ListItemText>Keep a track of all your purchases.</ListItemText>
              </MuiListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Login</Typography>
          <hr />
          <Typography variant="subtitle2">Already have an account?</Typography>
          <Button
            component="a"
            href="/login"
            variant="contained"
            endIcon={<ArrowRightAltOutlinedIcon />}
            sx={{ marginTop: "15px" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </MuiContainer>
  );
};

export default Register;
