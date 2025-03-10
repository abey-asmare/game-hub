import React from "react";
import useGenre from "../hooks/useGenre";

function GenreList() {
  const { data: genres } = useGenre();
  return (
    <div>
      {genres.map((g) => (
        <p>{g.name}</p>
      ))}
    </div>
  );
}

export default GenreList;
