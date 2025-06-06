import { useParams } from "react-router-dom";
import CircularProgressBar from "../components/CircularrogressBar";
import { groupBy } from "lodash";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import MovieInfomation from "../components/MediaDetail/MovieInfomation";
import useFetch from "../hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();
 
  const {loading,data:movieInfo} = useFetch({
    url:`/movie/${id}?append_to_response=release_dates,credits,videos`
  })
  const {data:rcmResponse,relatedLoading} = useFetch({
    url:`/movie/${id}/recommendations`
  })
  const relatedMovie = rcmResponse.results || []



  if (loading) return <Loading />;
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
        title={movieInfo?.title}
        backdrop_path={movieInfo?.backdrop_path}
        poster_path={movieInfo?.poster_path}
        release_date={movieInfo?.release_date}
        genres={movieInfo?.genres}
        point={movieInfo?.vote_average}
        overview={movieInfo?.overview}
        certificate={certificate}
        groupByCrews={groupByCrews}
        trailer={movieInfo?.videos?.results?.find(i => i.type === 'Trailer')?.key}
      />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={(movieInfo?.credits?.cast || [])}/>
            <RelatedMediaList  mediaList={relatedMovie} loading={relatedLoading}/>
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
