import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const rows = Array.from({ length: 10 }, (_, i) => ({
  source: `Update ${i + 1}`,
  description: "Administrators can easily view upcoming events, track attendee counts, and monitor recent activity related to event management.",
  date: "2024-04-25 10:15 AM",
}));

const AlertsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Source</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date & Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.source}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AlertsTable;
