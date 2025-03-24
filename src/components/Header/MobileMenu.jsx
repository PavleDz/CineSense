import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MenuItem, Menu, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "List", "Custom Page", "About Us"];

export default function MobileMenu() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton size="large" color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem key={page}>
            <Typography sx={{ textAlign: "center" }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
