import { useState, useEffect } from "react";
import SmallMovieCard from "./SmallMovieCard";
import { getTrending } from "../api/tmdbApi";
import { Button } from "@mui/material";

export default function SmallMovieContainer() {
  const [mediaType, setMediaType] = useState("movie");
  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const data = await getTrending(mediaType);
        // Map to minimal fields
        const mapped = data.results.map((item) => {
          const title =
            mediaType === "movie" ? item.title : item.name || "Untitled";
          const releaseDate =
            mediaType === "movie" ? item.release_date : item.first_air_date;
          const year = releaseDate ? releaseDate.slice(0, 4) : "N/A";

          return {
            id: item.id,
            title,
            posterPath: item.poster_path,
            rating: item.vote_average,
            year,
            genre: "N/A",
          };
        });
        setTrendingItems(mapped);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    }
    fetchTrending();
  }, [mediaType]);

  const handleSwapMediaType = () => {
    setMediaType((prev) => (prev === "movie" ? "tv" : "movie"));
  };

  const displayedItems = trendingItems.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 p-4">
      <Button variant="outlined" onClick={handleSwapMediaType}>
        {mediaType === "movie"
          ? "Show Trending Series"
          : "Show Trending Movies"}
      </Button>

      {displayedItems.map((movie) => (
        <SmallMovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
