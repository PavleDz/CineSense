import React from "react";
import { Box, Typography } from "@mui/material";
import LoginToggleCard from "../components/admin/LoginToggleCard";
import UserManagementCard from "../components/admin/UserManagementCard";
import AddAdminCard from "../components/admin/AddAdminCard";
import StatsCard from "../components/admin/StatsCard";

const AdminPage = () => {
  return (
    <Box className="p-4 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="mb-6">
        Admin Dashboard
      </Typography>

      <LoginToggleCard />
      <UserManagementCard />
      <AddAdminCard />
      <StatsCard />
    </Box>
  );
};

export default AdminPage;
