import { useParams } from "react-router-dom";
import CircularProgressBar from "../components/CircularrogressBar";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import MovieInfomation from "../components/MediaDetail/MovieInfomation";

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingForRelated, setLoadingForRelated] = useState(false);
  const { id } = useParams();
  const [relatedMovie, setRelatedMovie] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect( () =>{
    setLoadingForRelated(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    )
      .then(async (res) => {
        const data = await res.json();
        const movies = data?.results?.slice(0, 12)
        setRelatedMovie(movies);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      }).finally(() => {
        setLoadingForRelated(false);
      });
  },[id])

  if (loading) return <Loading />;
  if (loadingForRelated) return <Loading />;
  const certificate = (
    (movieInfo?.release_dates?.results || []).find((i) => i.iso_3166_1 === "US")
      ?.release_dates || []
  ).find((i) => i.certification)?.certification;
  const crews = movieInfo?.credits?.crew
    ?.filter((i) => ["Director", "Screenplay", "Writer"].includes(i.job))
    .map((i) => ({ id: i.id, job: i.job, name: i.name }));
  const groupByCrews = groupBy(crews, "job");
  return (
    <div>
      <Banner
        mediaInfo={movieInfo}
        certificate={certificate}
        groupByCrews={groupByCrews}
      />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="flex mx-auto max-w-screen-xl px-6 py-10 gap-6 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={(movieInfo?.credits?.cast || [])}/>
            <RelatedMediaList  mediaList={relatedMovie}/>
          </div>
          <div className="flex-1">
            <MovieInfomation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
