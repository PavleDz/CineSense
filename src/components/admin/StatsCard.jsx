import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const dummyStats = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Weekly Visits",
      data: [120, 200, 150, 170, 300, 250, 400],
      fill: true,
      borderColor: "#1976D2",
      tension: 0.2,
    },
  ],
};

const StatsCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" className="mb-4">
          Page Visit Statistics
        </Typography>
        <Line data={dummyStats} />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
