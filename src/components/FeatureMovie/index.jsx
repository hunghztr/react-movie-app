import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "../../hooks/useFetch";

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGU4M2RkNDQxNTRiNGE3YWJmMzA4NzEwN2UxNWMyNCIsIm5iZiI6MTc0ODc0NjIyNC4yODEsInN1YiI6IjY4M2JiZmYwNmYyY2Q0NWY4NjdiYTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfEX9sxnaRFZ80DMhf1CKW51RQBRp1LIkjkUHBxlgkw
const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popular } = useFetch({
    url: "/movie/popular",
  });
  const movies = (popular.results || []).slice(0, 4);
  useEffect(() => {
    setActiveMovieId(movies[0]?.id);
  },[JSON.stringify(movies)]);
  
  return (
    <div className="relative">
      {movies
        .filter((i) => i.id === activeMovieId)
        .map((i) => (
          <Movie key={i.id} data={i} />
        ))}
      <PaginateIndicator
        movies={movies}
        setActiveMovieId={setActiveMovieId}
        activeMovieId={activeMovieId}
      />
    </div>
  );
};
export default FeatureMovie;
