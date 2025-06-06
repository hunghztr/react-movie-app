import CircularProgressBar from "../CircularrogressBar";
import ImageComponent from "../Image";

const SeasonsList = ({ seasons = [] ,activeShowMore, setActiveShowMore}) => {
  return (
    <div className="text-[1.3vw] mt-8">
      <p className="font-bold text-[1.4vw] mb-4">Seasons</p>
      <div className="space-y-4">
        {seasons.map((i) => {
        return (
          <div
            key={i.id}
            className="flex gap-4 p-3 rounded-lg shadow-md border border-slate-200"
          >
            <div>
              <ImageComponent
                className="rounded-lg w-1/4 h-[195px]"
                src={`https://media.themoviedb.org/t/p/w130_and_h195_face${i.poster_path}`}
                width={130}
                height={195}
              />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[1.4vw]">{i.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  percent={Math.round(i.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                />
              </div>
              <p className="font-bold">Release Date: {i.air_date}</p>
              <p>{i.episode_count} Episodes</p>
              <p>{i.overview}</p>
            </div>
          </div>
        );
      })}
      </div>
      <p className="cursor-pointer"
       onClick={() => setActiveShowMore(!activeShowMore)}>{activeShowMore? 'Show Less':'Show More'}</p>
    </div>
  );
};
export default SeasonsList;
