import React from "react";

export default function MovieCard({ title, posterUrl, movieLink }) {
  return (
    <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg group">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${posterUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity"></div>
      <div className="relative z-10 p-4 flex flex-col justify-between h-full">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <a
          href={movieLink}
          className="mt-auto py-2 px-4 bg-blue-500 text-white text-center rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
