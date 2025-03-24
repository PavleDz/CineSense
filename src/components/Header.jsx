import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button sx={{ my: 2, color: "white", display: "block" }}>Home</Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>List</Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Custom Page
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            About us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
