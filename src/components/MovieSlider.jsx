import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const responsive = {
  superLargeDesktop: {
    // screens >= 3000px
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1055 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1055, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MovieSlider() {
  const movies = [
    {
      title: "Movie 1",
      posterUrl: "https://via.placeholder.com/400x600", // Replace with actual movie poster URL
      movieLink: "#",
    },
    {
      title: "Movie 2",
      posterUrl: "https://via.placeholder.com/400x600", // Replace with actual movie poster URL
      movieLink: "#",
    },
    {
      title: "Movie 3",
      posterUrl: "https://via.placeholder.com/400x600", // Replace with actual movie poster URL
      movieLink: "#",
    },
    {
      title: "Movie 4",
      posterUrl: "https://via.placeholder.com/400x600", // Replace with actual movie poster URL
      movieLink: "#",
    },
    {
      title: "Movie 5",
      posterUrl: "https://via.placeholder.com/400x600", // Replace with actual movie poster URL
      movieLink: "#",
    },
    {
      title: "Movie 6",
      posterUrl: "https://via.placeholder.com/400x600", // Replace with actual movie poster URL
      movieLink: "#",
    },
  ];

  const [isSliderActive, setIsSliderActive] = useState(true);

  return (
    <div
      className="py-8 px-4"
      onMouseEnter={() => setIsSliderActive(true)}
      onMouseLeave={() => setIsSliderActive(false)}
    >
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        centerMode={true}
        itemClass="carousel-item"
        tabIndex={0}
        slidesToSlide={3}
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            posterUrl={movie.posterUrl}
            movieLink={movie.movieLink}
          />
        ))}
      </Carousel>
    </div>
  );
}
