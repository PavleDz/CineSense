import MovieCard from "./movie-card";
import "../styles/best-movie-card.css";
import StarIcon from "@mui/icons-material/Star";
export default function () {
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
    <>
      <div className="best-movie-container">
        <div className="best-img-container">
          <img src="src\assets\scarface-friend-2__27832.jpg" />
        </div>
        <div className="best-details">
          <div className="best-rating">
            <StarIcon sx={{ color: "yellow" }}></StarIcon>
            <p className="best-description">
              <strong className="text-lg">{movies[0].rating}</strong>
            </p>
          </div>
          <div className="best-description-container">
            <h3>
              <strong>{movies[0].title}</strong>
            </h3>
            <p className="best-description">
              <strong>Year:</strong> {movies[0].year}
            </p>
            <p className="best-description">
              <strong>Genre: </strong>
              {movies.genre}
            </p>
          </div>
          <div className="best-button-container">
            <button className="more-info-button">More info...</button>
          </div>
        </div>
      </div>
    </>
  );
}
