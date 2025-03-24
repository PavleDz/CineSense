import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function LogoSection() {
  return (
    <>
      <IconButton sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <img
          src="src/assets/icon.png"
          alt="Custom Icon"
          style={{ width: 24, height: 24 }}
        />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        CineSense
      </Typography>
    </>
  );
}
