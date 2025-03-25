import React, { useState } from "react";
import { Card, CardContent, Typography, Switch } from "@mui/material";

const LoginToggleCard = () => {
  const [enableLogin, setEnableLogin] = useState(true);

  return (
    <Card className="mb-4">
      <CardContent className="flex justify-between items-center">
        <Typography variant="h6">Enable login for new users</Typography>
        <Switch
          checked={enableLogin}
          onChange={() => setEnableLogin(!enableLogin)}
          color="primary"
        />
      </CardContent>
    </Card>
  );
};

export default LoginToggleCard;
