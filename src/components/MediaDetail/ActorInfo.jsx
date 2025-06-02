const ActorInfo = ({ name, character, profilePath}) => {
  return (
    <div className="border border-slate-300 shadow-sm rounded-lg bg-black">
      <img
        className="rounded-lg"
        src={profilePath?`https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`:'/no-img.svg'}
        alt=""
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
};
export default ActorInfo;
