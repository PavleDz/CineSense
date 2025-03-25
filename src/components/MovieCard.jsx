import Button from "@mui/material/Button";

export default function MovieCard({ title, posterUrl, movieLink }) {
  return (
    <div className="relative w-full max-w-xs h-[30rem] rounded-xl overflow-hidden shadow-md group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${posterUrl})` }}
      />

      <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-60 transition-opacity" />

      <div className="relative z-10 h-full flex flex-col justify-between p-5">
        <h2 className="text-xl font-semibold leading-tight">{title}</h2>

        <Button
          variant="contained"
          fullWidth
          href={movieLink}
          sx={{
            mt: "auto",
            textTransform: "none",
            borderRadius: "0.5rem",
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
