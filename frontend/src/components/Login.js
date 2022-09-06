import styled from "@emotion/styled";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const MuiInputLabel = styled(InputLabel)({
  marginTop: "10px",
  fontSize: "14px",
});

const MuiListItem = styled(ListItem)({
  paddingTop: 0,
  paddingBottom: 0,
  fontSize: "14px",
});

const MuiListIconColor = styled(ListItemIcon)({
  color: "green",
});

const Login = () => {
  return (
    <Container sx={{ marginTop: "80px" }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Login</Typography>
          <hr />
          <Typography variant="subtitle2">Sign in to your account.</Typography>
          <MuiInputLabel>Email</MuiInputLabel>
          <TextField type="email" placeholder="Email" fullWidth size="small" />

          <MuiInputLabel>Password</MuiInputLabel>
          <TextField
            type="password"
            placeholder="xxxxxxxx"
            fullWidth
            size="small"
          />
          <Typography
            sx={{
              textAlign: "right",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            <Link component="a" href="#" sx={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Typography>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Create new account</Typography>
          <hr />
          <Typography variant="subtitle2">Create your own account</Typography>
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
          <Button
            component="a"
            href="/register"
            type="submit"
            variant="contained"
            sx={{ marginTop: "10px" }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
