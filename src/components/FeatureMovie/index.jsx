import {  useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGU4M2RkNDQxNTRiNGE3YWJmMzA4NzEwN2UxNWMyNCIsIm5iZiI6MTc0ODc0NjIyNC4yODEsInN1YiI6IjY4M2JiZmYwNmYyY2Q0NWY4NjdiYTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfEX9sxnaRFZ80DMhf1CKW51RQBRp1LIkjkUHBxlgkw
const FeatureMovie = () => {
  const [movies,setMovies] = useState([])
  const [activeMovieId, setActiveMovieId] = useState();
  // const [activeIndex, setActiveIndex] = useState(0);
  useEffect( () =>{
    fetch("https://api.themoviedb.org/3/movie/popular", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGU4M2RkNDQxNTRiNGE3YWJmMzA4NzEwN2UxNWMyNCIsIm5iZiI6MTc0ODc0NjIyNC4yODEsInN1YiI6IjY4M2JiZmYwNmYyY2Q0NWY4NjdiYTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfEX9sxnaRFZ80DMhf1CKW51RQBRp1LIkjkUHBxlgkw",
    },
  }).then( async (res) => {
    const data = await res.json()
    console.log(data.results)
    const popularMovies = data.results.slice(0,4);
    setMovies(popularMovies)
    setActiveMovieId(popularMovies[0].id)
  })
},[])

  // useEffect(() => {
  //   if (movies.length === 0) return; // Tránh lỗi khi movies chưa có dữ liệu
  //   setActiveIndex(prev => {
  //     const nextIndex = (prev + 1) % movies.length;
  //     setActiveMovieId(movies[nextIndex].id); // ✅ dùng đúng index sau khi tăng
  //     return nextIndex;
  //   },3000);
  // },[movies])
  return (
    <div className="relative">
      {
        movies.filter(i => i.id === activeMovieId).map( i => <Movie key={i.id} data={i} />)
      }
      <PaginateIndicator movies={movies} 
      setActiveMovieId={setActiveMovieId} activeMovieId={activeMovieId}/>
    </div>
  );
  
};
export default FeatureMovie;
