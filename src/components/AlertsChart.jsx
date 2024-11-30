import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "9 AM", Updates: 40, Alerts: 30 },
  { name: "12 PM", Updates: 80, Alerts: 50 },
  { name: "3 PM", Updates: 60, Alerts: 90 },
  { name: "6 PM", Updates: 100, Alerts: 70 },
];

const AlertsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Updates" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Alerts" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AlertsChart;


