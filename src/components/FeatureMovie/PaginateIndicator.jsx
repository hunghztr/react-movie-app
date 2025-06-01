const PaginateIndicator = ({movies,setActiveMovieId,activeMovieId}) => {
  return (
    <div className="absolute right-8 bottom-[10%]">
        <ul className="flex gap-1">
          {
            movies.map(i =>{
              return(
                <li key={i.id} id={i.id} className={`w-6 h-1 bg-slate-400 cursor-pointer ${activeMovieId===i.id? 'bg-slate-100':'bg-slate-900'}`}
                onClick={() =>{
                  setActiveMovieId(i.id)
                }}></li>
              )
            }
            )
          }
        </ul>
      </div>
  )
}
export default PaginateIndicator