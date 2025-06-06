
const TVShowInfomation = ({tvInfo}) => {
  return (
      <div>
          <p className="font-bold text-[1.4vw] mb-4">Infomation</p>
          <div className="mb-4">
            <p className="font-bold">Original Name</p>
            <p>{tvInfo?.original_name}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Original Country</p>
            {(tvInfo?.origin_country || []).map( i => i).join(', ')}
          </div>
          <div className="mb-4">
            <p className="font-bold">Status</p>
            <p>{tvInfo?.status}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Network</p>
            <p>{
              (tvInfo?.networks || []).map(i => <img className="invert" key={i.id} 
              src={`https://media.themoviedb.org/t/p/h30${i.logo_path}`} />)}</p>
          </div>
        </div>
  )
}
export default TVShowInfomation