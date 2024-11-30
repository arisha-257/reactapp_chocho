// import React from "react";
// import { Grid, Box } from "@mui/material";
// import StatsCard from "./StatsCard";
// import AlertsChart from "./AlertsChart";
// import AlertsTable from "./AlertsTable";

// const Dashboard = () => {
//     return (
//         <Box sx={{ flexGrow: 1, p: 3, background: "#121212", color: "#fff", minHeight: "100vh" }}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <AlertsChart />
//                 </Grid>
//                 <Grid item xs={6}>
//                     <StatsCard title="Query Response Time" value="250 ms" color="#4caf50" />
//                 </Grid>
//                 <Grid item xs={6}>
//                     <StatsCard title="CPU Load Time" value="1 ms" color="#2196f3" />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <AlertsTable />
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default Dashboard;
import React, { useState } from "react";
import { Grid, Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import StatsCard from "./StatsCard";
import AlertsChart from "./AlertsChart";
import AlertsTable from "./AlertsTable";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Dashboard = () => {
    const [sortType, setSortType] = useState("");
    const [startDateTime, setStartDateTime] = useState(dayjs().subtract(7, "day")); // Default 7 days ago
    const [endDateTime, setEndDateTime] = useState(dayjs()); // Default today

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}>
                <Grid container spacing={3}>
                    {/* Filter Section */}

                    {/* Chart Section on the Left */}
                    <Grid item xs={8}>
                        <AlertsChart />
                    </Grid>

                    {/* Stats Section on the Right */}
                    <Grid item xs={4}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <StatsCard title="Query Response Time" value="250 ms" color="#4caf50" />
                            <StatsCard title="CPU Load Time" value="1 ms" color="#2196f3" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 3 }}>
                            {/* Start Date and Time Picker */}
                            <DateTimePicker
                                label="Start Date & Time"
                                value={startDateTime}
                                onChange={(newValue) => setStartDateTime(newValue)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        sx={{
                                            backgroundColor: "#1e1e2f",
                                            input: { color: "#fff" },
                                            label: { color: "#fff" },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#fff",
                                            },
                                            width: "250px",
                                        }}
                                    />
                                )}
                            />

                            {/* End Date and Time Picker */}
                            <DateTimePicker
                                label="End Date & Time"
                                value={endDateTime}
                                onChange={(newValue) => setEndDateTime(newValue)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        sx={{
                                            backgroundColor: "#1e1e2f",
                                            input: { color: "#fff" },
                                            label: { color: "#fff" },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#fff",
                                            },
                                            width: "250px",
                                        }}
                                    />
                                )}
                            />

                            {/* Sort Dropdown */}
                            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                                <InputLabel sx={{ color: "#fff" }}>Sort by Type</InputLabel>
                                <Select
                                    value={sortType}
                                    onChange={handleSortChange}
                                    label="Sort by Type"
                                    sx={{
                                        backgroundColor: "#1e1e2f",
                                        color: "#fff",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#fff",
                                        },
                                    }}
                                >
                                    <MenuItem value="type1">Type 1</MenuItem>
                                    <MenuItem value="type2">Type 2</MenuItem>
                                    <MenuItem value="type3">Type 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>


                    {/* Full-Width Alerts Table */}
                    <Grid item xs={12}>
                        <AlertsTable />
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    );
};

export default Dashboard;