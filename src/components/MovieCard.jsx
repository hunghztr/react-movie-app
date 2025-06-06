import { Link } from "react-router-dom"
import CircularrogressBar from "./CircularrogressBar"
import ImageComponent from "./Image"
const MovieCard = ({title,releaseDate,poster,point,mediaType,id}) => {
  return (
    <Link to={`/${mediaType}/${id}`} className="border border-slate-800 rounded-lg">
    <div className="relative">
      {
        mediaType === 'tv' &&
        (
          <p className="absolute right-1 top-1 bg-black text-white p-1 text-sm rounded shadow-md font-bold">TV Show</p>
        )
      }
      <ImageComponent src={`https://image.tmdb.org/t/p/w500/${poster}`} width={210} height={300} 
      className='rounded-lg w-full' />
      <div className="px-4 relative -top-[1.5vw]">
        <CircularrogressBar percent={Math.round(point*10)} strokeColor={point >=7 ? 'green':point >= 5 ? 'orange':'red'} />
        <p className="font-bold mt-2">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
    </Link>
    
  )
}
export default MovieCard