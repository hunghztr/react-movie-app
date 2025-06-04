import ImageComponent from "../Image";
const ActorInfo = ({ name, character, profilePath}) => {
  return (
    <div className="border border-slate-300 shadow-sm rounded-lg bg-black">
      <ImageComponent src={profilePath?`https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`:'/no-img.svg'}
      width={276} height={350} />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
};
export default ActorInfo;
