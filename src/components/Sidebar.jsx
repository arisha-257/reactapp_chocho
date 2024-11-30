import React from "react";
import { Box, Typography, List, ListItem, ListItemText, styled } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

// Custom Switch Styled Component
const CustomSwitch = styled("div")(({ isDark }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    borderRadius: 20,
    backgroundColor: isDark ? "#333" : "#ccc",
    width: 100,
    cursor: "pointer",
    position: "relative",
    "&:hover": {
        backgroundColor: isDark ? "#444" : "#ddd",
    },
}));

const ToggleThumb = styled("div")(({ isDark }) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: isDark ? "#fff" : "#000",
    position: "absolute",
    top: "50%",
    left: isDark ? "calc(100% - 30px)" : "6px",
    transform: "translateY(-50%)",
    transition: "all 0.3s ease",
}));

const Sidebar = ({ toggleTheme, isDark }) => {
    return (
        <Box
            sx={{
                width: 240,
                height: "100vh",
                background: isDark ? "#1e1e2f" : "#f4f4f4",
                color: isDark ? "#fff" : "#000",
                p: 2,
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                ORGVISTA
            </Typography>
            <List>
                {["Dashboard", "Manage Sub Admins", "Manage Organizations", "Billing Management", "System Updates"].map((text) => (
                    <ListItem button key={text}>
                        {/* Correctly use `button` prop */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <Typography variant="body2">
                    <LightMode fontSize="small" />
                    Light
                </Typography>
                {/* Custom Switch for Theme Toggle */}
                <CustomSwitch onClick={toggleTheme} isDark={isDark}>
                    <ToggleThumb isDark={isDark} />
                </CustomSwitch>
                <Typography variant="body2">
                    <DarkMode fontSize="small" />
                    Dark
                </Typography>
            </Box>
        </Box>
    );
};

export default Sidebar;
