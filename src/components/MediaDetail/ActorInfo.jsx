import { Link } from "react-router-dom";
import ImageComponent from "../Image";
const ActorInfo = ({id, name, character, profilePath,episode_count}) => {
  return (
    <Link to={`/people/${id}`}>
    <div className="border h-[350px] border-slate-300 shadow-sm rounded-lg bg-black w-">
      <ImageComponent src={profilePath?`https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`:'/no-img.svg'}
      width={276} height={350} />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>{episode_count?(episode_count >1 ? `${episode_count} Episodes`:`${episode_count} Episode`):''}</p>
      </div>
    </div>
    </Link>
  );
};
export default ActorInfo;
