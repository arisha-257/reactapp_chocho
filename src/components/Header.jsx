import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#1e1e2f" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Avatar alt="Profile" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
