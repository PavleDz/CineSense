import React, { useState } from "react";
import MovieCard from "./movie-card";
import "../styles/top-rated.css";

export default function TopRated() {
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
  ];

  const [displayedMovies, setDisplayedMovies] = useState(movies.slice(0, 6));

  const handleLoadMore = () => {
    const nextMovies = movies.slice(
      displayedMovies.length,
      displayedMovies.length + 3
    );
    setDisplayedMovies((prevMovies) => [...prevMovies, ...nextMovies]);
  };

  return (
    <>
      <div className="top-rated-container">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="button-container">
        <button className="load-more-button" onClick={handleLoadMore}>
          LOAD MORE
        </button>
      </div>
    </>
  );
}
