import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const StatsCard = ({ title, value, color }) => {
  return (
    <Paper elevation={3} sx={{ height: '150px', p: 2, background: color }}>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Paper>
  );
};

export default StatsCard;
