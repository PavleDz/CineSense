import React, { useState } from "react";
import MovieCard from "./TopMovieCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button, Container, Grid2 } from "@mui/material";

export default function TopRatedContainer() {
  const movies = [
    { id: 1, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 2, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 3, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 4, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 5, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 6, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 7, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 8, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 9, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 10, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 11, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 12, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
    { id: 13, title: "The Scarface", rating: 9.5, genre: "Action", year: 1987 },
  ];

  const [displayedMovies, setDisplayedMovies] = useState(movies.slice(0, 4));
  const [buttonState, setButtonState] = useState(true);

  const handleLoadMore = () => {
    const nextMovies = movies.slice(
      displayedMovies.length,
      displayedMovies.length + 4
    );
    setDisplayedMovies((prevMovies) => [...prevMovies, ...nextMovies]);
    if (displayedMovies.length + 3 >= movies.length) setButtonState(false);
  };

  const handleHideAll = () => {
    setDisplayedMovies(movies.slice(0, 4));
    setButtonState(true);
  };

  return (
    <Container maxWidth="lg" className="py-12">
      <Grid2 container spacing={3} justifyContent="center">
        {displayedMovies.map((movie) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid2>
        ))}
      </Grid2>

      <div className="flex justify-center mt-10">
        {buttonState ? (
          <Button
            variant="contained"
            onClick={handleLoadMore}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 4,
              py: 1.5,
            }}
          >
            Load More
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleHideAll}
            endIcon={<ArrowDropUpIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 4,
              py: 1.5,
            }}
          >
            Hide All
          </Button>
        )}
      </div>
    </Container>
  );
}
