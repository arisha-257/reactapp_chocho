import React from "react";
import { Grid, Box } from "@mui/material";
import StatsCard from "./StatsCard";
import AlertsChart from "./AlertsChart";
import AlertsTable from "./AlertsTable";

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3, background: "#121212", color: "#fff", minHeight: "100vh" }}>
            {/* <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AlertsChart />
                </Grid>
                <Grid item xs={6}>
                    <StatsCard title="Query Response Time" value="250 ms" color="#4caf50" />
                </Grid>
                <Grid item xs={6}>
                    <StatsCard title="CPU Load Time" value="1 ms" color="#2196f3" />
                </Grid>
                <Grid item xs={12}>
                    <AlertsTable />
                </Grid>
            </Grid> */}
        </Box>
    );
};

export default Dashboard;
