import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenresProps {
  genresProp: GenreResponseProps[];
  setSelectedGenre: any;
  selectedGenre: number;
}

export const SideBar: React.FC<GenresProps> = ({
  genresProp,
  setSelectedGenre,
  selectedGenre,
  ...rest
}) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genresProp.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenre(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
