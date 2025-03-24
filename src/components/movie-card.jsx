import "../styles/movie-card.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function MovieCard() {
  return (
    <>
      <div className="movie-container">
        <div className="img-container">
          <img src="src\assets\scarface-friend-2__27832.jpg" />
        </div>
        <div className="rating">
          <StarBorderIcon sx={{ color: "yellow" }}></StarBorderIcon>
          <p className="description">9.5</p>
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
      </div>
    </>
  );
}
