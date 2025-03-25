import BestMovieCard from "./BestMovieCard";

export default function BestMovieContainer() {
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

  const bestMovies = movies.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 p-4">
      {bestMovies.map((movie) => (
        <BestMovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
