
import CircularProgressBar from "../CircularrogressBar";
import ImageComponent from "../Image";
import { useModalContext } from "../../context/ModalProvider";
const Banner = ({
  certificate,
  groupByCrews,
  title,
  backdrop_path,
  poster_path,
  genres,
  release_date,
  overview,point=0,
  trailer
}) => {
  const {popup} = useModalContext()
  console.log(trailer)
  return (
    <div className="relative text-white overflow-hidden shadow-sm shadow-slate-800">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        className="absolute inset-0 brightness-[.2]"
      />
      <img
        className="absolute inset-0 brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
      />
      <div className="flex relative max-w-screen-xl mx-auto px-6 py-8 gap-6 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
            width={600}
            height={900}
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="font-bold mb-2 text-[2vw]">{title}</p>
          <div className="flex gap-4 items-center">
            <span className="text-grayy-400 border border-gray-400 p-1">
              {certificate}
            </span>
            <p>{release_date}</p>
            <p>{(genres || []).map((i) => i.name).join(", ")}</p>
          </div>
          <div className="flex mt-4 items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round((point || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
                strokeColor="green"
              />{" "}
              Rating
            </div>
            <button className="flex" onClick={() => {
               popup(<iframe title='trailer'
               src={`https://www.youtube.com/embed/${trailer}`} 
               className='w-[50vw] aspect-video' />) }}>
              <svg
                className="w-6"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                ></path>
              </svg>
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="font-bold text-[1.3vw] mb-2">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {Object.keys(groupByCrews).map((i) => {
              return (
                <div key={i}>
                  <p className="font-bold">{i}</p>
                  <p>{groupByCrews[i]?.map((i) => i.name).join(", ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
