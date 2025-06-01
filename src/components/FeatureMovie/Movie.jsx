const Movie = ({data}) => {


  return (
    <div><img className="w-full aspect-video brightness-50" 
    src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
        <div className="text-white absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
          <p className="font-bold sm:text-[2vw] mb-2">{data.title}</p>
          <div>
            <p className="text-gray-400 border border-gray-400 inline-block p-1 mb-1">PG13</p>
            <p className="text-[1.2vw]">{data.release_date}</p>
          </div>
          <div>
            <div className="hidden sm:block text-[1.2vw] mt-4">
            <p className="font-bold mb-2">Overview</p>
            <p>
              {data.overview}
            </p>
            </div>
            <div className="flex mt-4 gap-2">
              <button className="flex bg-white text-black py-2 px-4 rounded text-[10px] lg:text-lg">
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
                </svg>Trailer
              </button>
              <button className="flex bg-slate-300/35 py-2 px-4 rounded text-[10px] lg:text-lg">View Detail</button>
            </div>
          </div>
        </div></div>
  )
}
export default Movie