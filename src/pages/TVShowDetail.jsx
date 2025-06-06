import { useParams } from "react-router-dom";
import { groupBy } from "lodash";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import useFetch from "../hooks/useFetch";
import TVShowInfomation from "../components/MediaDetail/TVShowInfomation";
import SeasonsList from "../components/MediaDetail/SeasonsList";
import { useState } from "react";

const TVShowDetail = () => {
  const { id } = useParams();
  const [activeShowMore,setActiveShowMore] = useState(false)
  const {loading,data:tvInfo} = useFetch({
    url:`/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`
  })
  const {data:rcmResponse,relatedLoading} = useFetch({
    url:`/tv/${id}/recommendations`
  })
  const relatedTVShow = rcmResponse.results || []
  const certification = (tvInfo.content_ratings?.results || []).find((i) =>{
    return i.iso_3166_1 === 'US'
  })?.rating


  if (loading) return <Loading />;

  const crews = tvInfo?.aggregate_credits?.crew
    ?.filter((crew) => {
      const jobs = (crew.jobs || []).map(j => j.job)
      return ['Director','Writer'].some(job => jobs.find(j=> j === job))
    })
    .map((i) => ({ id: i.id, job: i.jobs[0].job, name: i.name }));
  const groupByCrews = groupBy(crews, "job");
  let seasons = tvInfo?.seasons?.reverse()
  if(!activeShowMore){
    seasons = seasons?.slice(0,3)
  }
  return (
    <div>
      <Banner
        title={tvInfo?.name}
        backdrop_path={tvInfo?.backdrop_path}
        poster_path={tvInfo?.poster_path}
        release_date={tvInfo?.first_air_date}
        genres={tvInfo?.genres}
        point={tvInfo?.vote_average}
        overview={tvInfo?.overview}
        certificate={certification}
        groupByCrews={groupByCrews}
        trailer={tvInfo?.videos?.results?.find(i => i.type === 'Trailer')?.key}
      />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={(tvInfo?.aggregate_credits?.cast || [])
              .map(i => ({...i,character: i.roles[0]?.character,episode: i.roles[0].episode_count}))}/>
            <SeasonsList  seasons={seasons} 
            activeShowMore={activeShowMore} setActiveShowMore={setActiveShowMore} />
            <RelatedMediaList  mediaList={relatedTVShow} loading={relatedLoading}/>
          </div>
          <div className="flex-1">
            <TVShowInfomation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TVShowDetail;
