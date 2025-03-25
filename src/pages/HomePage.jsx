import MovieSlider from "../components/MovieSlider.jsx";
import TopRatedContainer from "../components/TopRatedContainer";
import BestMovieContainer from "../components/BestMovieContainer";
import ModalWindow from "../components/ModalWindow.jsx";
import { Container, Grid, Typography, Divider } from "@mui/material";

export default function HomePage() {
  const movies = [
    {
      title: "Movie 1",
      posterUrl: "https://via.placeholder.com/400x600",
      movieLink: "#",
    },
    {
      title: "Movie 2",
      posterUrl: "https://via.placeholder.com/400x600",
      movieLink: "#",
    },
    {
      title: "Movie 3",
      posterUrl: "https://via.placeholder.com/400x600",
      movieLink: "#",
    },
    {
      title: "Movie 4",
      posterUrl: "https://via.placeholder.com/400x600",
      movieLink: "#",
    },
    {
      title: "Movie 5",
      posterUrl: "https://via.placeholder.com/400x600",
      movieLink: "#",
    },
    {
      title: "Movie 6",
      posterUrl: "https://via.placeholder.com/400x600",
      movieLink: "#",
    },
  ];

  return (
    <Container maxWidth="xl" className="py-10">
      <section className="mb-12">
        <MovieSlider movies={movies} />
      </section>

      <section className="flex justify-center mb-16">
        <ModalWindow />
      </section>

      <Grid container spacing={6}>
        <Grid item xs={12} md={9}>
          <Typography variant="h5" className="font-bold mb-4">
            Top Rated
          </Typography>
          <Divider className="mb-6" />
          <TopRatedContainer />
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="sticky top-28">
            <Typography variant="h5" className="font-bold mb-4">
              Most Popular
            </Typography>
            <Divider className="mb-6" />
            <BestMovieContainer />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
