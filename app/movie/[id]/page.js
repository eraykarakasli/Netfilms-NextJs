import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );



  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
