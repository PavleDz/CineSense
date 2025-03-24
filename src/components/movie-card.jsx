import "../styles/movie-card.css";
import StarIcon from "@mui/icons-material/Star";
export default function MovieCard() {
  return (
    <>
      <div className="movie-container">
        <div className="img-container">
          <img src="src\assets\scarface-friend-2__27832.jpg" />
        </div>
        <div className="rating">
          <StarIcon sx={{ color: "yellow" }}></StarIcon>
          <p className="description">
            <strong className="text-lg">9.5</strong>
          </p>
        </div>
        <div className="description-container">
          <h3>
            <strong>The Scarface</strong>
          </h3>
          <p className="description">
            <strong>Year:</strong> 1987
          </p>
          <p className="description">
            <strong>Genre: </strong>Action
          </p>
        </div>
        <div className="button-container">
          <button>More info...</button>
        </div>
      </div>
    </>
  );
}
