import React from "react";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  setGenres: any;
  setMovies: any;
  setSelectedGenre: any;
  selectedGenreId: number;
  movies: MovieProps[];
}

export const Content: React.FC<ContentProps> = ({
  setGenres,
  setMovies,
  setSelectedGenre,
  selectedGenreId,
  movies,
  ...rest
}) => {
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
};
