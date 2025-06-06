import Loading from "../Loading";
import MovieCard from "../MovieCard";
const RelatedMediaList = ({ mediaList = [], loading,title = 'More Like This' }) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">{title}</p>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {mediaList?.map((i) => {
            return (
              <MovieCard
                key={i.id}
                id={i.id}
                title={i.title || i.name}
                releaseDate={i.release_date || i.first_air_date}
                poster={i.poster_path}
                point={i.vote_average}
                mediaType={i.media_type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default RelatedMediaList;
