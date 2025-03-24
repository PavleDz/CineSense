import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function LogoSection() {
  return (
    <>
      <IconButton sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
        <img src="src/assets/icon.png" alt="Custom Icon" className="h-8 w-8" />
      </IconButton>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexGrow: 1,
        }}
      >
        CineSense
      </Typography>
    </>
  );
}
